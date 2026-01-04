import { createContext, useContext, useState, useEffect } from 'react'
import { onAuthStateChange } from '../services/authService'
import { getUserById, createUser } from '../services/userService'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChange(async (firebaseUser) => {
      setUser(firebaseUser)
      
      if (firebaseUser) {
        // Fetch additional user data from Firestore
        try {
          const data = await getUserById(firebaseUser.uid)
          setUserData(data)
        } catch (error) {
          // User data might not exist yet, especially for new users
          setUserData(null)
        }
      } else {
        setUserData(null)
      }
      
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const refreshUserData = async () => {
    if (user) {
      try {
        const data = await getUserById(user.uid)
        setUserData(data)
      } catch (error) {
        // Silently fail
      }
    }
  }

  const value = {
    user,
    userData,
    loading,
    isAuthenticated: !!user,
    refreshUserData,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthContext

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  deleteUser,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth'
import app from '../config/firebaseConfig'

// Initialize Firebase Auth
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

// Sign Up with Email & Password
export const signUpWithEmail = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    // Update the user's display name
    if (displayName) {
      await updateProfile(userCredential.user, { displayName })
    }
    return { user: userCredential.user, error: null }
  } catch (error) {
    return { user: null, error: getErrorMessage(error.code) }
  }
}

// Sign In with Email & Password
export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return { user: userCredential.user, error: null }
  } catch (error) {
    return { user: null, error: getErrorMessage(error.code) }
  }
}

// Sign In with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return { user: result.user, error: null }
  } catch (error) {
    return { user: null, error: getErrorMessage(error.code) }
  }
}

// Sign Out
export const logOut = async () => {
  try {
    await signOut(auth)
    return { error: null }
  } catch (error) {
    return { error: getErrorMessage(error.code) }
  }
}

// Reset Password
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
    return { error: null, message: 'Password reset email sent successfully!' }
  } catch (error) {
    return { error: getErrorMessage(error.code), message: null }
  }
}

// Delete Account
export const deleteAccount = async (password = null) => {
  try {
    const user = auth.currentUser
    if (!user) {
      return { error: 'No user is currently signed in' }
    }

    // If the user signed in with email/password, they need to re-authenticate
    if (password && user.providerData[0]?.providerId === 'password') {
      const credential = EmailAuthProvider.credential(user.email, password)
      await reauthenticateWithCredential(user, credential)
    }

    await deleteUser(user)
    return { error: null, message: 'Account deleted successfully' }
  } catch (error) {
    return { error: getErrorMessage(error.code), message: null }
  }
}

// Auth State Observer
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback)
}

// Get Current User
export const getCurrentUser = () => {
  return auth.currentUser
}

// Helper function to get user-friendly error messages
const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'This email is already registered. Please sign in instead.'
    case 'auth/invalid-email':
      return 'Please enter a valid email address.'
    case 'auth/operation-not-allowed':
      return 'This sign-in method is not enabled.'
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.'
    case 'auth/user-disabled':
      return 'This account has been disabled.'
    case 'auth/user-not-found':
      return 'No account found with this email.'
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.'
    case 'auth/invalid-credential':
      return 'Invalid email or password. Please try again.'
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later.'
    case 'auth/popup-closed-by-user':
      return 'Sign-in popup was closed before completing.'
    case 'auth/requires-recent-login':
      return 'Please sign in again before deleting your account.'
    default:
      return 'An error occurred. Please try again.'
  }
}

export { auth }

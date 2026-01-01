import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../config/firebaseConfig'

const USERS_COLLECTION = 'users'

// Create a new user document in Firestore
export const createUser = async (userId, userData) => {
  try {
    // Check if user already exists
    const existingUser = await getDoc(doc(db, USERS_COLLECTION, userId))
    if (existingUser.exists()) {
      // User already exists, don't create duplicate
      return { id: userId, ...existingUser.data() }
    }

    const userDoc = {
      email: userData.email,
      displayName: userData.displayName || '',
      photoURL: userData.photoURL || '',
      provider: userData.provider || 'email',
      role: userData.role || 'user', // Default role is 'user', can be 'admin'
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }

    await setDoc(doc(db, USERS_COLLECTION, userId), userDoc)
    return { id: userId, ...userDoc }
  } catch (error) {
    console.error('Error creating user:', error)
    throw error
  }
}

// Get user by ID
export const getUserById = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, USERS_COLLECTION, userId))
    if (userDoc.exists()) {
      return { id: userDoc.id, ...userDoc.data() }
    }
    throw new Error('User not found')
  } catch (error) {
    console.error('Error getting user:', error)
    throw error
  }
}

// Update user data
export const updateUser = async (userId, userData) => {
  try {
    const userRef = doc(db, USERS_COLLECTION, userId)
    await updateDoc(userRef, {
      ...userData,
      updatedAt: serverTimestamp(),
    })
    return { id: userId, ...userData }
  } catch (error) {
    console.error('Error updating user:', error)
    throw error
  }
}

// Delete user document from Firestore
export const deleteUserFromFirestore = async (userId) => {
  try {
    await deleteDoc(doc(db, USERS_COLLECTION, userId))
    return { success: true }
  } catch (error) {
    console.error('Error deleting user:', error)
    throw error
  }
}

// Check if user exists
export const checkUserExists = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, USERS_COLLECTION, userId))
    return userDoc.exists()
  } catch (error) {
    console.error('Error checking user:', error)
    return false
  }
}

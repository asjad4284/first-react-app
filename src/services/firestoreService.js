import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../config/firebaseConfig'
import { auth } from '../config/firebaseConfig'

const ITEMS_COLLECTION = 'items'

// Helper function to check if current user can modify an item
const canModifyItem = async (itemId, userRole) => {
  // Admins can modify any item
  if (userRole === 'admin') return true
  
  // Get the item to check ownership
  const item = await getItemById(itemId)
  return item.createdBy === auth.currentUser?.uid
}

// CREATE - Add a new item (requires authentication)
export const addItem = async (itemData) => {
  try {
    const currentUser = auth.currentUser
    if (!currentUser) {
      throw new Error('You must be logged in to create items')
    }

    const docRef = await addDoc(collection(db, ITEMS_COLLECTION), {
      ...itemData,
      createdBy: currentUser.uid,
      createdByEmail: currentUser.email,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
    return { id: docRef.id, ...itemData, createdBy: currentUser.uid }
  } catch (error) {
    console.error('Error adding item:', error)
    throw error
  }
}

// READ - Get all items (public)
export const getAllItems = async () => {
  try {
    const itemsQuery = query(
      collection(db, ITEMS_COLLECTION),
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(itemsQuery)
    const items = []
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() })
    })
    return items
  } catch (error) {
    console.error('Error getting items:', error)
    throw error
  }
}

// READ - Get items by user ID
export const getItemsByUser = async (userId) => {
  try {
    const itemsQuery = query(
      collection(db, ITEMS_COLLECTION),
      where('createdBy', '==', userId),
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(itemsQuery)
    const items = []
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() })
    })
    return items
  } catch (error) {
    console.error('Error getting user items:', error)
    throw error
  }
}

// READ - Get single item by ID (public)
export const getItemById = async (itemId) => {
  try {
    const itemDoc = await getDoc(doc(db, ITEMS_COLLECTION, itemId))
    if (itemDoc.exists()) {
      return { id: itemDoc.id, ...itemDoc.data() }
    } else {
      throw new Error('Item not found')
    }
  } catch (error) {
    console.error('Error getting item:', error)
    throw error
  }
}

// UPDATE - Update an existing item (requires authentication + ownership/admin)
export const updateItem = async (itemId, itemData, userRole = 'user') => {
  try {
    const currentUser = auth.currentUser
    if (!currentUser) {
      throw new Error('You must be logged in to update items')
    }

    // Check if user can modify this item
    const item = await getItemById(itemId)
    if (userRole !== 'admin' && item.createdBy !== currentUser.uid) {
      throw new Error('You can only edit your own items')
    }

    const itemRef = doc(db, ITEMS_COLLECTION, itemId)
    await updateDoc(itemRef, {
      ...itemData,
      updatedAt: serverTimestamp(),
    })
    return { id: itemId, ...itemData }
  } catch (error) {
    console.error('Error updating item:', error)
    throw error
  }
}

// DELETE - Delete an item (requires authentication + ownership/admin)
export const deleteItem = async (itemId, userRole = 'user') => {
  try {
    const currentUser = auth.currentUser
    if (!currentUser) {
      throw new Error('You must be logged in to delete items')
    }

    // Check if user can modify this item
    const item = await getItemById(itemId)
    if (userRole !== 'admin' && item.createdBy !== currentUser.uid) {
      throw new Error('You can only delete your own items')
    }

    await deleteDoc(doc(db, ITEMS_COLLECTION, itemId))
    return itemId
  } catch (error) {
    console.error('Error deleting item:', error)
    throw error
  }
}

// Check if current user owns an item
export const isItemOwner = async (itemId) => {
  try {
    const currentUser = auth.currentUser
    if (!currentUser) return false
    
    const item = await getItemById(itemId)
    return item.createdBy === currentUser.uid
  } catch (error) {
    return false
  }
}

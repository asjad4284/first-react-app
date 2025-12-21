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
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../config/firebaseConfig'

const ITEMS_COLLECTION = 'items'

// CREATE - Add a new item
export const addItem = async (itemData) => {
  try {
    const docRef = await addDoc(collection(db, ITEMS_COLLECTION), {
      ...itemData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
    return { id: docRef.id, ...itemData }
  } catch (error) {
    console.error('Error adding item:', error)
    throw error
  }
}

// READ - Get all items
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

// READ - Get single item by ID
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

// UPDATE - Update an existing item
export const updateItem = async (itemId, itemData) => {
  try {
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

// DELETE - Delete an item
export const deleteItem = async (itemId) => {
  try {
    await deleteDoc(doc(db, ITEMS_COLLECTION, itemId))
    return itemId
  } catch (error) {
    console.error('Error deleting item:', error)
    throw error
  }
}

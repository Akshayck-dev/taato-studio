import { db } from './firebase'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore'

export interface FirebaseBooking {
  id?: string
  clientName: string
  email: string
  phone: string
  service: string
  artist: string
  date: string
  time: string
  depositStatus: 'Paid' | 'Pending' | 'Refunded'
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled'
  placement: string
  size: string
  createdAt?: any
}

export interface FirebaseService {
  id?: string
  name: string
  rate: string
  duration: string
  description?: string
}

// ==================== BOOKINGS API ==================== //

export async function fetchBookingsFromFirebase(): Promise<FirebaseBooking[]> {
  try {
    const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    })) as FirebaseBooking[]
  } catch (error) {
    console.warn('Firebase fetchBookings error (using fallback):', error)
    return []
  }
}

export async function createBookingInFirebase(booking: Omit<FirebaseBooking, 'id'>) {
  try {
    const docRef = await addDoc(collection(db, 'bookings'), {
      ...booking,
      createdAt: serverTimestamp(),
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Firebase createBooking error:', error)
    return { success: false, error }
  }
}

export async function updateBookingStatusInFirebase(
  bookingId: string,
  status: FirebaseBooking['status'],
  depositStatus?: FirebaseBooking['depositStatus']
) {
  try {
    const bookingRef = doc(db, 'bookings', bookingId)
    const updateData: Partial<FirebaseBooking> = { status }
    if (depositStatus) updateData.depositStatus = depositStatus
    await updateDoc(bookingRef, updateData)
    return { success: true }
  } catch (error) {
    console.error('Firebase updateBookingStatus error:', error)
    return { success: false, error }
  }
}

// ==================== SERVICES CATALOG API ==================== //

export async function fetchServicesFromFirebase(): Promise<FirebaseService[]> {
  try {
    const querySnapshot = await getDocs(collection(db, 'services'))
    return querySnapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    })) as FirebaseService[]
  } catch (error) {
    console.warn('Firebase fetchServices error (using fallback):', error)
    return []
  }
}

export async function createServiceInFirebase(service: Omit<FirebaseService, 'id'>) {
  try {
    const docRef = await addDoc(collection(db, 'services'), {
      ...service,
      createdAt: serverTimestamp(),
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Firebase createService error:', error)
    return { success: false, error }
  }
}

import { storage, auth } from '../zconfig/firebaseConfiguration'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const signUp = async (email,password) => {
   return await createUserWithEmailAndPassword(auth, email, password);
}

export const logIn = async (email, password) => {
   return await signInWithEmailAndPassword(auth, email, password);
}

export const logOut = async () => {
   return await signOut(auth);
}

export const uploadImage = async (uri) => {
   const response = await fetch(uri)
   const blob = await response.blob()
   const storageRef = ref(storage, `/images/${auth.currentUser.uid}`)
   await uploadBytes(storageRef, blob)
   return getDownloadURL(storageRef)
}

import app from "./firebase.js";
import {getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

export async function subscribeToHellfire(subscription) {
   const db = getFirestore(app);
   const hellfireCollection = collection(db, 'hellfire-club');
   const docRef = await addDoc(hellfireCollection, subscription);
   return docRef.id;

}
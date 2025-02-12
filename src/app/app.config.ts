import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
// import { initializeApp } from "firebase/app";
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { collection, addDoc } from '@firebase/firestore';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyCITw-vQCsxJfPbosFzL_Z0idsGo5e3jzA",
      authDomain: "portfolio-57be2.firebaseapp.com",
      projectId: "portfolio-57be2",
      storageBucket: "portfolio-57be2.firebasestorage.app",
      messagingSenderId: "235276381553",
      appId: "1:235276381553:web:0fb3c6a218f4ef4d265ad0"
    })),
    provideFirestore(() => getFirestore()),
    provideHttpClient(),
  ]
};

// async function addTestEntry() {
//   try {
//     const db = getFirestore();
//     const testCollection = collection(db, 'testCollection');

//     const docRef = await addDoc(testCollection, {
//       name: "Test-Eintrag",
//       timestamp: new Date()
//     });

//     console.log("Dokument erfolgreich hinzugefügt mit ID:", docRef.id);
//   } catch (error) {
//     console.error("Fehler beim Hinzufügen des Dokuments: ", error);
//   }
// }

// addTestEntry();
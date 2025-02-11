import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
})

export class DatabaseService {
    private firestore = inject(Firestore);

    async addTestEntry() {
        try {
            const testCollection = collection(this.firestore, "testCollection");
            const docRef = await addDoc(testCollection, {
                name: "Test-Eintrag",
                timestamp: new Date()
            });
            console.log("Dokument erfolgreich hinzugefügt mit ID:", docRef.id);
        } catch (error) {
            console.error("Fehler beim Hinzufügen des Dokuments: ", error);
        }
    }
}
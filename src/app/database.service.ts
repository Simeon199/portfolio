import { Injectable, inject } from '@angular/core';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class DatabaseService {

    private languageSubject = new BehaviorSubject<string>('de');
    language$ = this.languageSubject.asObservable();

    constructor(private firestore: Firestore) { }

    setLanguage(lang: string) {
        this.languageSubject.next(lang);
    }

    async getTranslation(docId: string) {
        const colRef = collection(this.firestore, 'translations');
        const q = query(colRef, where('id', '==', docId));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            const data = snapshot.docs[0].data();
            return data[this.languageSubject.value];
        }
        return null;
    }
    // private firestore = inject(Firestore);

    // async addTestEntry() {
    //     try {
    //         const testCollection = collection(this.firestore, "testCollection");
    //         const docRef = await addDoc(testCollection, {
    //             name: "Test-Eintrag",
    //             timestamp: new Date()
    //         });
    //         console.log("Dokument erfolgreich hinzugefügt mit ID:", docRef.id);
    //     } catch (error) {
    //         console.error("Fehler beim Hinzufügen des Dokuments: ", error);
    //     }
    // }
}
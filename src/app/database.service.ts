import { Injectable } from '@angular/core';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
    providedIn: 'root'
})

export class DatabaseService {

    private languageSubject = new BehaviorSubject<string>('de');
    language$ = this.languageSubject.asObservable();

    constructor(private firestore: Firestore, private sharedService: SharedService) {
        this.sharedService.isGermanButtonActive$.subscribe((state) => {
            console.log('state value: ', state);
        })
    }

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

    async getDocumentsByKey(collectionName: string) {
        const colRef = collection(this.firestore, collectionName);
        const snapshot = await getDocs(colRef);
        console.log(snapshot.docs.map(doc => doc.data()));
    }
}
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class LanguageService {
    private currentLanguageSubject = new BehaviorSubject<string>('de');
    currentLanguage$ = this.currentLanguageSubject.asObservable();

    constructor(private translate: TranslateService) {
        // Ünterstützte Sprache definieren
        this.translate.addLangs(['de', 'en']);

        // Standardsprache setzen
        const browserLang = navigator.language.split('-')[0];
        const defaultLang = this.translate.getLangs().includes(browserLang) ? browserLang : 'de';

        this.setLanguage(defaultLang);
    }

    setLanguage(lang: string) {
        this.translate.use(lang);
        this.currentLanguageSubject.next(lang);
    }

    getCurrentLanguage(): string {
        return this.currentLanguageSubject.value;
    }

    // getCurrentLanguage(): string {
    //     return this.translate.currentLang
    // }

    // private isGermanButtonActiveSource = new BehaviorSubject<boolean>(false);
    // isGermanButtonActive$ = this.isGermanButtonActiveSource.asObservable();

    // setGermanButtonActive(state: boolean) {
    //     this.isGermanButtonActiveSource.next(state);
    // }

    // switchLanguage(lang: string) {
    //     this.translate.use(lang);
    // }
}
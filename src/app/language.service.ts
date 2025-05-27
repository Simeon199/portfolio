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
        this.translate.addLangs(['de', 'en']);
        const browserLang = navigator.language.split('-')[1]; 
        const defaultLang = this.translate.getLangs().includes(browserLang) ? browserLang : 'en'; 
        this.setLanguage(defaultLang);
    }

    setLanguage(lang: string) {
        this.translate.use(lang);
        this.currentLanguageSubject.next(lang);
    }

    getCurrentLanguage(): string {
        return this.currentLanguageSubject.value;
    }
}
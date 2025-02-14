import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    constructor(private translate: TranslateService) {
        this.translate.addLangs(['de', 'en']);
        this.translate.setDefaultLang('de');

        // Optional

        // const savedLang = localStorage.getItem('language') || 'de';
        // this.translate.use(savedLang);

    }

    getCurrentLanguage(): string {
        return this.translate.currentLang
    }

    // Optional

    // switchLanguage(lang: string) {
    //     this.translate.use(lang);
    //     localStorage.setItem('language', lang);
    // }
}
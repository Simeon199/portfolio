import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SharedService } from '../../shared.service';
import { DatabaseService } from '../../database.service';
import { CommonModule } from '@angular/common';
import { englishVersion } from '../../english-version';
import { germanVersion } from '../../german-version';
import { languageContainer } from '../../interface-languages';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-person-description',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CommonModule
  ],
  templateUrl: './person-description.component.html',
  styleUrl: './person-description.component.scss'
})
export class PersonDescriptionComponent {
  allAboutMeContainer: any[] = [];
  currentLanguage: string = 'de';
  germanVersion: languageContainer = germanVersion;
  englishVersion: languageContainer = englishVersion;

  constructor(private sharedService: SharedService, private databaseService: DatabaseService, private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.sharedService.isGermanButtonActive$.subscribe(async (state) => {
      this.allAboutMeContainer = await this.databaseService.getDocumentsByKey('aboutMe');
      this.setRespectiveLanguage(state);
    });
  }

  setRespectiveLanguage(state: boolean) {
    if (state == true) {
      this.currentLanguage = 'de';
    } else if (state == false) {
      this.currentLanguage = 'en';
    }
  }
}

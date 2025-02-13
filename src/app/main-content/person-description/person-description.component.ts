import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SharedService } from '../../shared.service';
import { DatabaseService } from '../../database.service';
import { CommonModule } from '@angular/common';


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

  constructor(private sharedService: SharedService, private databaseService: DatabaseService) {
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

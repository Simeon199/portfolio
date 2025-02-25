import { Component } from '@angular/core';
import { ButtonStyleComponent } from '../shared/button-style/button-style.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';
import { CommonModule } from '@angular/common';
import { technologyListData } from './technology_list_data';
import { technologyListModel } from './technology_list_model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    ButtonStyleComponent,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent {

  currentLanguage: string = "de";
  technologyListData: technologyListModel = technologyListData;

  constructor(private languageService: LanguageService) {
    for (let singleProject of this.getTechnologyListValues()) {
      console.log(singleProject.name);
    }
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  getTechnologyListKeys() {
    return Object.keys(technologyListData);
  }

  getTechnologyListValues() {
    return Object.values(technologyListData);
  }
}
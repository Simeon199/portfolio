import { Component } from '@angular/core';
import { ButtonStyleComponent } from '../shared/button-style/button-style.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';
import { CommonModule } from '@angular/common';
import { technologyListData } from './technology_list_data';
import { technologyListModel } from './technology_list_model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    ButtonStyleComponent,
    TranslateModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent {

  currentLanguage: string = "de";
  technologyListData: technologyListModel = technologyListData;
  isHovered: boolean = false;
  styleValueHovered: string | any = 'block';

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  setHovered(isHovered: boolean) {
    this.isHovered = isHovered;
    if (this.isHovered) {
      this.styleValueHovered = 'none';
    } else {
      this.styleValueHovered = 'block';
    }
  }

  getTechnologyListKeys() {
    return Object.keys(technologyListData);
  }

  getTechnologyListValues() {
    return Object.values(technologyListData);
  }
}
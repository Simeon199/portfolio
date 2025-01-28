import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() index: string = '0';
  @Input() title: string = '';
  @Input() technologies: string[] = [];
}

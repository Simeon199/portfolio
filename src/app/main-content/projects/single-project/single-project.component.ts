import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() index: string = '0';
  @Input() title: string = '';
  @Input() technologies: string[] = [];
}

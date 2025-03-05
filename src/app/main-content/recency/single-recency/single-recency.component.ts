import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-recency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-recency.component.html',
  styleUrl: './single-recency.component.scss'
})
export class SingleRecencyComponent {
  @Input() recency!: string;
  @Input() recencyAuthor!: string;
  @Input() index!: number;
}

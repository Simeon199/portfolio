import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-recency',
  standalone: true,
  imports: [],
  templateUrl: './single-recency.component.html',
  styleUrl: './single-recency.component.scss'
})
export class SingleRecencyComponent {
  @Input() recency!: string;
}

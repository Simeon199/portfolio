import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() technologies!: any;
  @Input() imageSrc!: string;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {
  @Input() index: string = '0';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() technologies: any; // Hier müsste eine komplexere Datenstruktur reinkommen --> Nur vorübergehend any-type !!!
  @Input() imageSrc: string = '';
}

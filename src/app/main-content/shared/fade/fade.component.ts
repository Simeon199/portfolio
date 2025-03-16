import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-fade',
  standalone: true,
  imports: [],
  templateUrl: './fade.component.html',
  animations: [
    trigger('fadeInOut', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden <=> visible', animate(500))
    ])
  ],
  styleUrl: './fade.component.scss'
})
export class FadeComponent {
  isVisible = true;
}

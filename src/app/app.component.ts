import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  legalNoticeMessage: SafeHtml | undefined;

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  // constructor(private translate: TranslateService) {
  //   this.translate.get('contactFormular.legalNoticeMessage').subscribe((text: string) => {
  //     this.legalNoticeMessage = text.replace('{link}', '<a class="link" routerLink="/datenschutz">Datenschutzerklärung</a>');
  //   });
  // }

  // constructor(private translate: TranslateService, private sanitizer: DomSanitizer) {
  //   this.translate.get('contactFormular.legalNoticeMessage').subscribe((res: string) => {
  //     this.legalNoticeMessage = this.sanitizer.bypassSecurityTrustHtml(res);
  //   });
  // }

  constructor(private translate: TranslateService, private router: Router, private viewportScroller: ViewportScroller, private sanitizer: DomSanitizer) {
    this.translate.get('contactFormular.legalNoticeMessage').subscribe((res: string) => {
      this.legalNoticeMessage = this.sanitizer.bypassSecurityTrustHtml(res);
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.viewportScroller.scrollToPosition([0, window.scrollY - 200]);
        }, 1000);
      }
    })
  }

  navigateToPrivacy(event: Event) {
    event.preventDefault();
    this.router.navigate(['/legal-notice']);
  }
}
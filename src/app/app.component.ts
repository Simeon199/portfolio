import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import '/assets/aos/dist/aos.css';

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

export class AppComponent implements AfterViewInit {
  legalNoticeMessage: SafeHtml | undefined;
  observer: MutationObserver | undefined;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.translate.get('contactFormular.legalNoticeMessage').subscribe((res: string) => {
      this.legalNoticeMessage = this.sanitizer.bypassSecurityTrustHtml(res);
    });
  }

  ngAfterViewInit() {
    AOS.init();
    this.bindClickEvent();
    this.observer = new MutationObserver(() => {
      this.bindClickEvent();
    });
    this.observer.observe(this.elRef.nativeElement, { childList: true, subtree: true });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          AOS.refresh();
        }, 50);
      }
    });
  }

  bindClickEvent() {
    const links = this.elRef.nativeElement.querySelectorAll('.legal-link');
    links.forEach((link: HTMLElement) => {
      this.renderer.listen(link, 'click', (event) => {
        event.preventDefault();
        this.router.navigate(['/privacy-policy']);
      });
    });
  }
}
import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HeaderComponent } from './main-content/header/header.component';
import { FooterComponent } from './main-content/footer/footer.component';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements AfterViewInit {
  legalNoticeMessage: SafeHtml | undefined;
  observer: MutationObserver | undefined;

  constructor(
    private viewportScroller: ViewportScroller,
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
          const fragment = this.router.parseUrl(this.router.url).fragment;
          if (fragment) {
            this.viewportScroller.scrollToAnchor(fragment);
          }
          setTimeout(() => {
            const currentY = window.scrollY || document.documentElement.scrollTop;
            window.scrollTo({ top: Math.max(0, currentY - 200), behavior: 'smooth' });
          }, 500);
        }, 100);
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
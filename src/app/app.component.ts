import { Component, AfterViewInit, ElementRef, Renderer2, effect, inject, computed } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HeaderComponent } from './main-content/header/header.component';
import { FooterComponent } from './main-content/footer/footer.component';
import { SharedService } from './shared.service';
import { IsOnHomepageService } from './is-on-homepage.service';
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

  private router = inject(Router);

  legalNoticeMessage: SafeHtml | undefined;
  observer: MutationObserver | undefined;

  constructor(
    private viewportScroller: ViewportScroller,
    private translate: TranslateService,
    private sanitizer: DomSanitizer,
    private elRef: ElementRef,
    private renderer: Renderer2,
    public sharedService: SharedService,
    public isOnHomepageService: IsOnHomepageService
  ) {
    // Setup für Legal Notice Message
    this.setupLegalNoticeMessage();

    // Effekt für NavigationEnd-Event
    effect(() => {
      const event = this.isOnHomepageService.currentRoute();
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          AOS.refresh();
          this.viewportScroller.setOffset([0, 141]);
        }, 100);
      }
    });
  }

  ngAfterViewInit() {
    AOS.init();
    this.setupMutationObserver();
    this.setupRouterEventListener();
  }

  private setupLegalNoticeMessage() {
    this.translate.get('contactFormular.legalNoticeMessage').subscribe((res: string) => {
      this.legalNoticeMessage = this.sanitizer.bypassSecurityTrustHtml(res);
    });
  }

  private setupRouterEventListener() {
    // Hier kann normale Logik verwendet werden, aber ohne `effect()`
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          AOS.refresh();
          this.viewportScroller.setOffset([0, 141]);
        }, 100);
      }
    });
  }

  private setupMutationObserver() {
    this.observer = new MutationObserver(() => this.bindClickEvent());
    this.observer.observe(this.elRef.nativeElement, { childList: true, subtree: true });
  }

  private bindClickEvent() {
    let links = this.elRef.nativeElement.querySelectorAll('.legal-link');
    links.forEach((link: HTMLElement) => {
      this.renderer.listen(link, 'click', (event) => {
        event.preventDefault();
        this.router.navigate(['/privacy-policy']);
      });
    });
  }
}
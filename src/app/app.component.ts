import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2, inject, OnDestroy } from '@angular/core';
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

export class AppComponent implements AfterViewInit, OnDestroy {

  private router = inject(Router);

  @ViewChild('headerRef', {read: ElementRef}) headerE1!: ElementRef;
  resizeObserver!: ResizeObserver;
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
    this.setupLegalNoticeMessage();
  }

  ngAfterViewInit() {
    AOS.init();
    this.setupMutationObserver();
    this.setupRouterEventListener();
    this.setHeaderHeightVar();
    this.resizeObserver = new ResizeObserver(() => {
      this.setHeaderHeightVar();
    });
    this.resizeObserver.observe(this.headerE1.nativeElement);
    window.addEventListener('resize', this.setHeaderHeightVar);
  }

  private setupLegalNoticeMessage() {
    this.translate.get('contactFormular.legalNoticeMessage').subscribe((res: string) => {
      this.legalNoticeMessage = this.sanitizer.bypassSecurityTrustHtml(res);
    });
  }

  private setupRouterEventListener() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          AOS.refresh();
          this.viewportScroller.setOffset([0, 120]);
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

  setHeaderHeightVar = () => {
    const headerHeight = this.headerE1.nativeElement.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
  }

  ngOnDestroy(){
    this.resizeObserver.disconnect();
    window.removeEventListener('resize', this.setHeaderHeightVar);
  }
}
import { Component, Inject, LOCALE_ID, OnInit, PLATFORM_ID, Renderer2, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router, NavigationStart } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { I18n } from '@ngx-translate/i18n-polyfill';
import { RoutesConfig } from './configs/routes.config';
import { UtilsHelperService } from './modules/core/services/utils-helper.service';
import { Subscription } from 'rxjs';

declare const Modernizr;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewChecked {
  isOnline: boolean;
  public routerEventsSubcription: Subscription = null;
  public navigating = false;

  constructor(
    private title: Title,
    private meta: Meta,
    private snackBar: MatSnackBar,
    private router: Router,
    private i18n: I18n,
    private renderer: Renderer2,
    @Inject(DOCUMENT) doc: Document,
    @Inject(LOCALE_ID) locale: string,
    @Inject(PLATFORM_ID) private platformId: object,
    private cdRef: ChangeDetectorRef
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isOnline = navigator.onLine;
      renderer.setAttribute(doc.documentElement, 'lang', locale);
    } else {
      this.isOnline = true;
    }
  }

  ngOnInit() {
    this.title.setTitle(this.i18n({ value: 'Az-Zuhaa', id: '@@appTitle' }));

    this.onEvents();
    //this.checkBrowser();
  }
  
  isHomeRoute() {
    if(this.router.url === '/')
    return true ;
    else
    return false;
  }
  ngAfterViewChecked(){
    this.cdRef.detectChanges();
 }

  onEvents() {
    this.router.events.subscribe((event: any) => {
      if ((event instanceof NavigationStart)) {
        this.navigating = true;
      }
      if (event instanceof NavigationEnd) {
        this.navigating = false;
        switch (event.urlAfterRedirects) {
          case '/':
            this.meta.updateTag({
              name: 'description',
              content: this.i18n({ value: 'Home meta description', id: '@@homeMetaDescription' }),
            });
            break;
          case '/' + RoutesConfig.routesNames.heroes.basePath:
            this.title.setTitle('Heroes list');
            this.meta.updateTag({
              name: 'description',
              content: this.i18n({
                value: 'Heroes meta description',
                id: '@@heroesMetaDescription',
              }),
            });
            break;
        }
      }
    });
  }

  checkBrowser() {
    if (isPlatformBrowser(this.platformId)) {
      if (UtilsHelperService.isBrowserValid()) {
        this.checkBrowserFeatures();
      } else {
        this.snackBar.open(
          this.i18n({ value: 'Change your browser', id: '@@changeBrowser' }),
          'OK'
        );
      }
    }
  }

  checkBrowserFeatures() {
    let supported = true;
    for (const feature in Modernizr) {
      if (
        Modernizr.hasOwnProperty(feature) &&
        typeof Modernizr[feature] === 'boolean' &&
        Modernizr[feature] === false
      ) {
        supported = false;
        break;
      }
    }

    if (!supported) {
      this.snackBar.open(this.i18n({ value: 'Update your browser', id: '@@updateBrowser' }), 'OK');
    }

    return supported;
  }
}


import { Component, Inject, OnInit, HostListener, Renderer2, ElementRef, ViewChild, ChangeDetectorRef, PLATFORM_ID } from '@angular/core';
import { APP_CONFIG } from '../../../configs/app.config';
import { NavigationEnd, Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { CookieService } from '@gorniv/ngx-universal';
import { ProgressBarService } from '../../../modules/core/services/progress-bar.service';
import { ROUTES_CONFIG, RoutesConfig } from 'src/app/configs/routes.config';
import { HeaderService } from '../../services/header.service';
import { LoginService } from 'src/app/modules/account/shared/login.service';
import { LoginResponseModel } from 'src/app/modules/account/shared/login.model';
import { Subscription } from 'rxjs';
import { EProfileType } from 'src/app/modules/core/models/common.model';
import { HeaderSharingService } from '../../services/header-sharing.service';
import { Base64 } from 'js-base64';
import { isPlatformBrowser } from '@angular/common';
import $ from 'jquery';
import { LoginComponent } from 'src/app/modules/account/pages/login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModelComponent } from '../login-model/login-model.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(window:click)': 'onClick($event)'
  }
})

export class HeaderComponent implements OnInit {
  // @ViewChild('toggleButton') toggleButton: ElementRef;
  // @ViewChild('menu') menu: ElementRef;
  route: string;
  currentURL = '';
  selectedLanguage: string;
  progressBarMode: string;
  classApplied = false;
  currentUrl: string;
  public loginResponseModel: LoginResponseModel = new LoginResponseModel();
  languages: any[];
  scrollPosition: number;
  public user: LoginResponseModel;
  public href = '';
  public trainExpertities: any[] = [];
  public fitnessNutrationServices: any[] = [];
  public userEProfileType: EProfileType;
  public eProfileType = EProfileType;
  isMenuOpen = false;
  isMenuwebOpen = false;
  closeResult: string;
  constructor(@Inject(APP_CONFIG) public appConfig: any, @Inject(ROUTES_CONFIG) public routesConfig: any,
              private progressBarService: ProgressBarService,
              private cookieService: CookieService,
              private headerServices: HeaderService,
              public router: Router,
              private modalService: NgbModal,
              private loginService: LoginService,
              private headerSharingService: HeaderSharingService,
              private ref: ChangeDetectorRef,
              @Inject(PLATFORM_ID) private platformId: object,
    // private appSearchingDataService: AppSearchingDataService, private renderer: Renderer2, private _eref: ElementRef
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentURL = event.urlAfterRedirects;
      }
    });
    this.languages = [{ name: 'en', label: 'English' }, { name: 'es', label: 'Español' }];

  }
  toggleMenu($event) {
    $event.stopPropagation();
    this.isMenuwebOpen = !this.isMenuwebOpen;
  }
  toggleMenu1($event) {
    $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }
  onClick($event) {
    this.isMenuwebOpen = false;
  }
 
  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {
      $(document).on('click', function (event) {
        if (!$(event.target).closest('#main-navigation').length) {
          $(".navbar-collapse").removeClass("show");
          $(".navbar-toggler").removeClass("active");
          $("body").removeClass("flow-hide");
        }
      });
      // clicking other than login
      $(document).on('click', function (event) {
        if (!$(event.target).closest('#main-navigation').length) {
          $(".navbar-collapse").removeClass("show");
          $(".navbar-toggler").removeClass("active");
          $(".profile-menu").removeClass("active");
          $(".profile-pic-btn").removeClass("active");
          $("body").removeClass("flow-hide");
        }
      });
    }
  
    this.userEProfileType = this.loginService.getEUserProfileType();
    this.loginResponseModel = this.loginService.getUserInformation() as LoginResponseModel;
    this.selectedLanguage = this.cookieService.get('language') || 'en';

    this.progressBarService.getUpdateProgressBar().subscribe((mode: string) => {
      this.progressBarMode = mode;
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
debugger;
    this.user = this.loginService.getUserInformation();

    this.headerSharingService.currentMessage.subscribe(message => {
      this.updateUserData(message);
    });
  }

  updateUserData(message) {
    if (message.imageThumbnailUrl && message.name) {
      this.user.imageThumbnailUrl = message.imageThumbnailUrl;
      this.user.name = message.name;
      this.user.firstName = message.firstName;
      this.user.lastName = message.lastName;
      this.cookieService.putObject('loginResponse', this.user);
    }
  }

  goToAppSearch(item, breadcrumb): string {
    item.breadcrumb = breadcrumb;
    // this.appSearchingDataService.changeMessage(item);
    const urlId = Base64.encode(JSON.stringify(item));
    return urlId;
    // this.router.navigate([RoutesConfig.routes.appSearching.main + '/' + urlId]);
  }

  goToHome(): void {
    this.router.navigate([RoutesConfig.routes.home]);
  }

  toggleClass() {
    this.classApplied = !this.classApplied;
  }

 

 
  OpenLoadModel(id) {
    debugger;
  const modalRef = this.modalService.open(LoginModelComponent,);
  modalRef.componentInstance.id = id;
  modalRef.result.then((result) => {
    debugger;
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }

  private getDismissReason(reason: any): string {
    return `with: ${reason}`;
  }


  

  @HostListener('document:scroll')
  public onScroll() {
    this.scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
  }

  changeLanguage(language: string): void {
    this.cookieService.put('language', language);
    this.selectedLanguage = language;
  }

  onLogout() {
    this.loginService.logout();
    this.loginService.signOutExternal();
  }
}


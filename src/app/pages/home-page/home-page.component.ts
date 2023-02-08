import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { HomePageService } from 'src/app/shared/services/home-page.service';
import { EProfileType, HomePageProfileModel, LandingCardModel, SliderModel } from 'src/app/modules/core/models/common.model';
import { environment } from 'src/environments/environment';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES_CONFIG } from 'src/app/configs/routes.config';

import { Router } from '@angular/router';
import { LoginResponseModel } from 'src/app/modules/account/shared/login.model';
import { LoginService } from 'src/app/modules/account/shared/login.service';
import { CourseModel } from 'src/app/modules/courses/shared/course.model';
import { AboutModel } from 'src/app/modules/about/shared/about.model';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  public CoursesModel :CourseModel[]=[];
  public sliderModel :SliderModel[]=[];
  public baseUrl: string;
  public aboutUs: AboutModel= new AboutModel();
  public Id:string;
  public GetProfiles: HomePageProfileModel[] = [];
  // tslint:disable-next-line:max-line-length
  public user: LoginResponseModel;
  sliderImages: any[] = [{ imageUrl: 'https://cf-simple-s3-origin-isolategym-s3-cf-939946006481.s3.amazonaws.com/img/danielle-cerullo-CQfNt66ttZM-unsplash.jpg', title: ' <h3>Transform <br>through<br> vibration</h3>' },
  { imageUrl: 'https://cf-simple-s3-origin-isolategym-s3-cf-939946006481.s3.amazonaws.com/img/kaka-sandhu-85EF54QhBs4-unsplash.jpg', title: '<h3>Transform <br>through<br> vibration</h3>' }];

  // slides = [
  // { img: 'http://placehold.it/258x258/000000' },
  // { img: 'http://placehold.it/258x258/111111' },
  // { img: 'http://placehold.it/258x258/333333' },
  // { img: 'http://placehold.it/258x258/333333' },
  // { img: 'http://placehold.it/258x258/666666' }
  // ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  

  constructor(private homeService: HomePageService, config: NgbCarouselConfig,
    @Inject(ROUTES_CONFIG) public routesConfig: any, private router: Router,  private loginService: LoginService ) {
    this.baseUrl = "https://admin.azzuhaislamicinstitute.com";
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    debugger;
    this.user = this.loginService.getUserInformation();
    this.homeService.getCoures().subscribe(x => {
      debugger;
      if (x.data) {
        this.CoursesModel=x.data;
        this.CoursesModel= this.CoursesModel.slice(0, 4)
      }
    });
    this.homeService.getSlider().subscribe(x => {
      debugger;
      if (x.data) {
        this.sliderModel=x.data;
      }
    });

    this.Id="729A7E00-BD99-427D-972D-CFF7BA4E4C3B";
    this.homeService.getAboutUs(this.Id).subscribe(x => {
      debugger;
      if (x.data) {
        this.aboutUs=x.data;
      }
    });
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 800) {
      this.slideConfig = { slidesToShow: 2, slidesToScroll: 2 };
    } else {
      this.slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

    }
  }


 

  getEnumKeyByEnumValue(myEnum, enumValue) {
    const keys = Object.keys(myEnum).filter(x => myEnum[x].toUpperCase() == enumValue);
    return keys.length > 0 ? keys[0] : null;
  }

  slickInit(e) {
    console.log('slick initialized');
  }
  breakpoint(e) {
    console.log('breakpoint');
  }
  afterChange(e) {
    console.log('afterChange');
  }
  beforeChange(e) {
    console.log(e);
  }

}

import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { environment } from 'src/environments/environment';
import { GalleryModel } from '../shared/gallery.model';
import { GalleryService } from '../shared/gallery.service';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.scss']
})
export class GallerySectionComponent implements OnInit {
  public baseUrl: string;
  public GalleryModel :GalleryModel[]=[];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
  constructor( @Inject(ROUTES_CONFIG) public routesConfig: any,
  private service: GalleryService,) {
    this.baseUrl = "https://admin.azzuhaislamicinstitute.com";
   }

  ngOnInit(): void {
    this.service.getGallery().subscribe(x => {
      debugger;
      if (x.data) {
        this.GalleryModel=x.data;
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

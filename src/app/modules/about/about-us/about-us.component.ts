import { Component, Inject, OnInit } from '@angular/core';
import { ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { GalleryModel } from '../../gallery/shared/gallery.model';
import { GalleryService } from '../../gallery/shared/gallery.service';
import { AboutModel } from '../shared/about.model';
import { AboutService } from '../shared/about.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  public Id:string;
  public baseUrl: string;
  public aboutUs: AboutModel= new AboutModel();
  public GalleryModel :GalleryModel[]=[];
  constructor(
    @Inject(ROUTES_CONFIG) public routesConfig: any,
    private service: AboutService,
    private servicegallery: GalleryService,
  ) {   this.baseUrl = "https://admin.azzuhaislamicinstitute.com";}

  ngOnInit(): void {
    this.Id="920682BC-CD2C-4FD4-8142-ED86B0C43B28";
    this.service.getAboutUs(this.Id).subscribe(x => {
      debugger;
      if (x.data) {
        this.aboutUs=x.data;
      }
    });
    this.servicegallery.getGallery().subscribe(x => {
      debugger;
      if (x.data) {
        this.GalleryModel=x.data;
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaMainModel } from '../shared/media.model';
import { MediaService } from '../shared/media.service';

@Component({
  selector: 'app-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.scss']
})
export class MediaDetailComponent implements OnInit {
  public id = '';
  public categoryName = '';
private baseUrl: string;
  public MediaMainModel :MediaMainModel[]=[];
  constructor(private sanitizer: DomSanitizer,private route: ActivatedRoute,  private service: MediaService,  private router: Router,) { this.baseUrl = "https://admin.azzuhaislamicinstitute.com";}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        debugger;
        if (params.hasOwnProperty('id')) {
          this.id = params['id'];
          this.categoryName = params['name'];

          this.Search(this.id);
        }
      }
    );
  }
  Search(slugUrl) {
    const promise1 = this.service.getMedia(slugUrl).toPromise();
    Promise.all([promise1]).then(([var1]) => {
      if(this.categoryName=='audio'){
        this.MediaMainModel = var1.data.filter(x=>x.isAudio==true);
        for (let index = 0; index < this.MediaMainModel.length; index++) {
         this.MediaMainModel[index].fileUrl=this.baseUrl+this.MediaMainModel[index].fileUrl;
         
        }
      }
      if(this.categoryName=='video'){
        this.MediaMainModel = var1.data.filter(x=>x.isAudio==false);
      
      }
     
    });
  }

 getSantizeUrl(url: string) {
    debugger
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaModel } from '../shared/media.model';
import { MediaService } from '../shared/media.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {
  public MediaModel :MediaModel[]=[];
  constructor( private service: MediaService,  private router: Router,) { }

  ngOnInit(): void {
    this.service.getMediaTypes().subscribe(x => {
      debugger;
      if (x.data) {
        this.MediaModel=x.data;
      }
    });
  }


}

import { Component, Inject, OnInit } from '@angular/core';
import { ROUTES_CONFIG } from 'src/app/configs/routes.config';

@Component({
  selector: 'app-upload-resume-preview',
  templateUrl: './upload-resume-preview.component.html',
  styleUrls: ['./upload-resume-preview.component.scss']
})
export class UploadResumePreviewComponent implements OnInit {

  constructor( @Inject(ROUTES_CONFIG) public routesConfig: any,) { }

  ngOnInit(): void {
  }

}

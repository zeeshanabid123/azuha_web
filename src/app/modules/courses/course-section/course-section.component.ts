import { GalleryService } from './../../gallery/shared/gallery.service';
import { Component, Inject, OnInit } from '@angular/core';
import { ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { CourseService } from '../shared/course.service';
import { CourseModel } from '../shared/course.model';

@Component({
  selector: 'app-course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.scss']
})
export class CourseSectionComponent implements OnInit {
  public CoursesModel :CourseModel[]=[];
  public baseUrl: string;
  constructor(@Inject(ROUTES_CONFIG) public routesConfig: any,
  private service: CourseService,) {

    this.baseUrl = "https://admin.azzuhaislamicinstitute.com";
   }

  ngOnInit(): void {
    this.service.getCoures().subscribe(x => {
      debugger;
      if (x.data) {
        this.CoursesModel=x.data;
      }
    });
  }

}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from 'src/app/modules/core/models/ResponseModel.model';
import { HomePageProfileModel, LandingCardModel, SliderModel } from 'src/app/modules/core/models/common.model';
import { CourseModel } from 'src/app/modules/courses/shared/course.model';
import { AboutModel } from 'src/app/modules/about/shared/about.model';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.api.baseUrl;
  }

  getAboutUs(Id:string) {
    return this.http.get<ResponseModel<AboutModel>>(`${this.baseUrl}/api/AboutUs/getaboutus/${Id}`);
  }
  getlandingslidercards(profileTypeId: string, skip: number, take: number) {
    return this.http.get<ResponseModel<LandingCardModel[]>>(
      `${this.baseUrl}/api/Landing/getlandingslidercards/${profileTypeId}/${skip}/${take}`);
  }
  getHomePageTrainer()
  {
    return this.http.get<ResponseModel<HomePageProfileModel[]>>(`${this.baseUrl}/api/v1/Trainer/gettrainersforhomepage`);
  }
  getCoures() {
    return this.http.get<ResponseModel<CourseModel[]>>(`${this.baseUrl}/api/Courses/getCourses`);
  }
  

  getSlider() {
    return this.http.get<ResponseModel<SliderModel[]>>(`${this.baseUrl}/api/Common/getslider`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../../core/models/ResponseModel.model';
import { AdmisionModel, CourseModel } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.api.baseUrl;
  }

  getCoures() {
    return this.http.get<ResponseModel<CourseModel[]>>(`${this.baseUrl}/api/Courses/getCourses`);
  }

  SaveAdmisition(model: AdmisionModel) {
    return this.http.post<ResponseModel<boolean>>(
      `${this.baseUrl}/api/Courses/saveadmission`,
      model
    );
  }
}

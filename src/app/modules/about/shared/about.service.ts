import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../../core/models/ResponseModel.model';
import { AboutModel } from './about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.api.baseUrl;
  }

  getAboutUs(Id:string) {
    return this.http.get<ResponseModel<AboutModel>>(`${this.baseUrl}/api/AboutUs/getaboutus/${Id}`);
  }

}

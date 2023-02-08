import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AboutModel } from '../../about/shared/about.model';
import { ResponseModel } from '../../core/models/ResponseModel.model';
import { ContactModel } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.api.baseUrl;
  }
  SaveContact(model: ContactModel) {
    return this.http.post<ResponseModel<boolean>>(
      `${this.baseUrl}/api/Common/savecontactquery`,
      model
    );
  }
  getAboutUs(Id:string) {
    return this.http.get<ResponseModel<AboutModel>>(`${this.baseUrl}/api/AboutUs/getaboutus/${Id}`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../../core/models/ResponseModel.model';
import {  Certicationrequest, CertifactionModel, EducationModel, Educatiorequestnmodel, HistoryModel, HistoryRequestModel, ICountry, ProfileInfo } from './upload-resume.model';

@Injectable({
  providedIn: 'root',
})
export class UploadResumeService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.api.baseUrl;
  }

 

  SaveResumeProfile(model: ProfileInfo) {
    return this.http.post<ResponseModel<boolean>>(
      `${this.baseUrl}/api/v1/ResumeManager/profileInfo`,
      model
    );
  }

  SaveResumeHistory(model: HistoryRequestModel) {
    return this.http.post<ResponseModel<boolean>>(
      `${this.baseUrl}/api/v1/ResumeManager/empolyhistory`,
      model
    );
  }
  SaveResumeeducation(model: Educatiorequestnmodel) {
    return this.http.post<ResponseModel<boolean>>(
      `${this.baseUrl}/api/v1/ResumeManager/empolyeducation`,
      model
    );
  }

  SaveResumecertitication(model: Certicationrequest) {
    return this.http.post<ResponseModel<boolean>>(
      `${this.baseUrl}/api/v1/ResumeManager/employcertification`,
      model
    );
  }

  getprofile() {
    return this.http.get<ResponseModel<ProfileInfo>>(`${this.baseUrl}/api/v1/ResumeManager/getprofile`);
  }

  getcertification() {
    return this.http.get<ResponseModel<CertifactionModel[]>>(`${this.baseUrl}/api/v1/ResumeManager/getcertification`);
  }
  getemployerhistory() {
    return this.http.get<ResponseModel<HistoryModel[]>>(`${this.baseUrl}/api/v1/ResumeManager/gethistory`);
  }

  getemployereducation() {
    return this.http.get<ResponseModel<EducationModel[]>>(`${this.baseUrl}/api/v1/ResumeManager/geteducation`);
  }
}
function sanitizeString(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

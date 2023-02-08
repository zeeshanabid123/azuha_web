import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TrainnerSearchModel, HomePageProfileModel } from '../../core/models/common.model';
import { ResponseModel } from '../../core/models/ResponseModel.model';
import { MediaModel, MediaMainModel } from './media.model';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.api.baseUrl;
  }


  getMediaTypes() {
    return this.http.get<ResponseModel<MediaModel[]>>(
      `${this.baseUrl}/api/Common/getmediatypes`);
  }

  
  getMedia(Id: string) {
    return this.http.get<ResponseModel<MediaMainModel[]>>(
      `${this.baseUrl}/api/Media/getMedia/${Id}`);
  }
}

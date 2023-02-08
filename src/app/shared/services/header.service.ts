import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../../../app/modules/core/models/ResponseModel.model';
import {
  ContactUsRequestModel,
  HomePageProfileModel,
  ItemObject,
  subscribeResponseModel,
  TrainnerSearchModel,
} from '../../../app/modules/core/models/common.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.api.baseUrl;
  }

  saveContactUs(model: ContactUsRequestModel) {
    return this.http.post<ResponseModel<boolean>>(
      `${this.baseUrl}/api/v1/Common/savecontactqureies`,
      model
    );
  }

  getTrainers(model: TrainnerSearchModel) {
    return this.http.post<ResponseModel<HomePageProfileModel[]>>(
      `${this.baseUrl}/api/v1/Trainer/getsearchresult`,
      model
    );
  }
}

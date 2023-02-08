import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ItemObject, GeoCodeRootObject, FeedbackRequest, EProfileType, CountryRequestModel, StateRequestModel, CityRequestModel, JsonDataModel } from '../models/common.model';
import { ResponseModel } from '../models/ResponseModel.model';
import { PackageModel } from '../models/package.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.api.baseUrl;
  }

  getgenders() {
    return this.http.get<ResponseModel<ItemObject<number>[]>>(`${this.baseUrl}/api/v1/Common/getgenders`);
  }

  getterms() {
    return this.http.get<ResponseModel<ItemObject<number>[]>>(`${this.baseUrl}/api/v1/Common/getterms`);
  }

  getexperiences() {
    return this.http.get<ResponseModel<ItemObject<number>[]>>(`${this.baseUrl}/api/Common/getexperiences`);
  }

  getfrequencies(profileTypeId: any) {
    if (profileTypeId === null)
    {
      profileTypeId = EProfileType.EmptyGuid;
    }
    return this.http.get<ResponseModel<ItemObject<number>[]>>(`${this.baseUrl}/api/Common/getfrequencies/${profileTypeId}`);
  }

  getpackage(profileTypeId: any) {
    return this.http.get<ResponseModel<PackageModel[]>>(`${this.baseUrl}/api/Common/getpackage/${profileTypeId}`);
  }

  getcontent(contentId: any) {
    return this.http.get<ResponseModel<string>>(`${this.baseUrl}/api/Common/getcontent/${contentId}`);
  }
  getJsoncontent(Id: any) {
    return this.http.get<ResponseModel<JsonDataModel>>(`${this.baseUrl}/api/Common/getjsoncontent/${Id}`);
  }
  liketrainer(trainerId: any, isLike: any) {
    return this.http.get<ResponseModel<string>>(`${this.baseUrl}/api/Common/liketrainer/${trainerId}/${isLike}`);
  }

  getDynamoDbItems() {
    return this.http.get<ResponseModel<any>>(`${this.baseUrl}/api/AmazonDynamoDB/getitems`);
  }

  ratetrainer(trainerId, rating) {
    return this.http.get<ResponseModel<boolean>>(`${this.baseUrl}/api/Common/ratetrainer/${trainerId}/${rating}`);
  }

  validatevoucher(coupon: any) {
    return this.http.get<ResponseModel<number>>(`${this.baseUrl}/api/Common/validatevoucher/${coupon}`);
  }
  likeblog(blogId: any, isLike: any) {
    return this.http.get<ResponseModel<string>>(`${this.baseUrl}/api/Common/likeblog/${blogId}/${isLike}`);
  }
  geocode(zip: any) {
    return this.http.get<GeoCodeRootObject>(
      `https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${zip}&sensor=false&key=AIzaSyAUlWfkXzX3MyPFDcaS5_t1yeQ_uJWlARM`
    );
  }

  getlateLong(address: any)
  {
    return this.http.get<GeoCodeRootObject>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAUlWfkXzX3MyPFDcaS5_t1yeQ_uJWlARM`
    );
  }
  getname(userId) {
    return this.http.get<ResponseModel<string>>(`${this.baseUrl}/api/Common/getname/${userId}`);
  }
  feedback(request: FeedbackRequest) {
    return this.http.post<ResponseModel<boolean>>(`${this.baseUrl}/api/Common/feedback`, request);
  }

  getcountry()
  {
    return this.http.get<ResponseModel<CountryRequestModel[]>>(`${this.baseUrl}/api/Common/getcountries`);
  }
  getState(countryId)
  {
    return this.http.get<ResponseModel<StateRequestModel[]>>(`${this.baseUrl}/api/Common/getstates/${countryId}`);
  }

  getcity(stateId)
  {
    return this.http.get<ResponseModel<CityRequestModel[]>>(`${this.baseUrl}/api/Common/getcities/${stateId}`);
  }
}

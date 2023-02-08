import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../../core/models/ResponseModel.model';
import { GalleryModel } from './gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.api.baseUrl;
  }

  getGallery() {
    return this.http.get<ResponseModel<GalleryModel[]>>(`${this.baseUrl}/api/Gallery/getGallery`);
  }
}

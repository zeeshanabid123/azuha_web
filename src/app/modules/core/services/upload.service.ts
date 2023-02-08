import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map, tap, last } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UploadService {
    public progressSource = new BehaviorSubject<number>(0);
    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.api.baseUrl;
    }

    upload(file: File , type: string) {

        // return this.uploadS3(file, '2');
        const formData = new FormData();
        formData.append('mediaFile', file);
        formData.append('type', type);

        const req = new HttpRequest(
            'POST',
            `${this.baseUrl}/api/Upload/uploadmedia`,
            formData,
            {
                reportProgress: true
            }
        );

        return this.http.request(req).pipe(
            map(event => this.getEventMessage(event, file)),
            tap((envelope: any) => this.processProgress(envelope)),
            last()
        );
    }

    processProgress(envelope: any): void {
        if (typeof envelope === 'number') {
            this.progressSource.next(envelope);
        }
    }

    uploadS3(file: File, type: string) {
        const formData = new FormData();
        formData.append('mediaFiles', file);
        formData.append('type', type);
        const headers = new HttpHeaders({ 'ngsw-bypass': ''});
        const req = new HttpRequest(
            'POST',
            `${this.baseUrl}/api/v1/Upload/uploadmedias3`,
            formData,
            {
                reportProgress: true,
                headers: headers
            },
            
        );

        return this.http.request(req).pipe(
            map(event => this.getEventMessage(event, file)),
            tap((envelope: any) => this.processProgress(envelope)),
            last()
        );
    }

    private getEventMessage(event: HttpEvent<any>, file: File) {
        debugger;
        switch (event.type) {
            case HttpEventType.Sent:
                return `Uploading file "${file.name}" of size ${file.size}.`;
            case HttpEventType.UploadProgress:
                return Math.round((100 * event.loaded) / event.total);
            case HttpEventType.Response:
                return { message: `File was completely uploaded!`, body: event.body };
            default:
                return `File "${file.name}" surprising upload event: ${event.type}.`;
        }
    }
}

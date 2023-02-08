import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  NgbCalendar,
  NgbDateParserFormatter,
  NgbInputDatepickerConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { RoutesConfig, ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { Certicationrequest, CertifactionModel } from '../../shared/upload-resume.model';
import { UploadResumeService } from '../../shared/upload-resume.service';

@Component({
  selector: 'app-upload-resume-certifactions',
  templateUrl: './upload-resume-certifactions.component.html',
  styleUrls: ['./upload-resume-certifactions.component.scss'],
})
export class UploadResumeCertifactionsComponent implements OnInit {
  public list: CertifactionModel[] = [];
  public object: Certicationrequest = new Certicationrequest();

  addForm: FormGroup;
  constructor(
    @Inject(ROUTES_CONFIG) public routesConfig: any,
    private fb: FormBuilder,
    config: NgbInputDatepickerConfig,
    calendar: NgbCalendar,
    private service: UploadResumeService,
    private ngbDateParserFormatter: NgbDateParserFormatter,
    private router: Router
  ) {
    this.ProcessData();
  }

  get formArr() {
    return this.addForm.get('certificationform') as FormArray;
  }

  onRemoveRow(rowIndex: number) {
    this.list.splice(rowIndex, 1);
  }
  createItem(): FormGroup {
    return this.fb.group({
      schoolname: [],
      institutaionname: [],
      startdate: [],
      enddate: [],
      description: [],
    });
  }
  doSubmit() {
    this.list.forEach(x => {
      x.endate = this.ngbDateParserFormatter.format(x.endate);
      x.startDate = this.ngbDateParserFormatter.format(x.startDate);
    });
    this.object.certifactionModels = this.list;
    this.service.SaveResumecertitication(this.object).subscribe(x => {
      if (x.data) {
        this.router.navigate([RoutesConfig.routes.uploadresume.previewprofile]);
      }
    });
  }
  ngOnInit(): void {
    this.GetProfileOnload();
  }
  _v() {
    return this.addForm.value;
  }

  GetProfileOnload() {
    const promise1 = this.service.getcertification().toPromise();
    debugger;
    Promise.all([promise1]).then(([var1]) => {
      if (var1.data.length === 0) {
        this.ProcessData();
      } else {
        this.list = var1.data;
        this.list.forEach(x => {
          x.startDate = this.ngbDateParserFormatter.parse(x.startDate);
          x.endate = this.ngbDateParserFormatter.parse(x.endate);
        });
      }
    });
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  ProcessData() {
    if (this.list.length === 0) {
      this.list.push({
        endate: '',
        startDate: '',
        description: '',
        institutaion: '',
        titleName: '',
      });
    }
  }

  addRow() {
    this.list.push({
      endate: '',
      startDate: '',
      description: '',
      institutaion: '',
      titleName: '',
    });
  }
}

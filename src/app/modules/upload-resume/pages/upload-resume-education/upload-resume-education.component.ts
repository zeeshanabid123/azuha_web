import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  NgbCalendar,
  NgbDateParserFormatter,
  NgbDateStruct,
  NgbInputDatepickerConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { RoutesConfig, ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { EducationModel, Educatiorequestnmodel } from '../../shared/upload-resume.model';
import { UploadResumeService } from '../../shared/upload-resume.service';

@Component({
  selector: 'app-upload-resume-education',
  templateUrl: './upload-resume-education.component.html',
  styleUrls: ['./upload-resume-education.component.scss'],
})
export class UploadResumeEducationComponent implements OnInit {
  public edu: EducationModel[] = [];
  public edulist: Educatiorequestnmodel = new Educatiorequestnmodel();

  addForm: FormGroup;
  modelDob: NgbDateStruct;
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
    return this.addForm.get('educationsform') as FormArray;
  }

  onRemoveRow(rowIndex: number) {
    this.edu.splice(rowIndex, 1);
  }
  createItem(): FormGroup {
    return this.fb.group({
      schoolname: [],
      degreename: [],
      majors: [],
      startdate: [],
      enddate: [],
      gpa: [],
    });
  }
  doSubmit() {
    this.edu.forEach(x => {
      x.endate = this.ngbDateParserFormatter.format(x.endate);
      x.startDate = this.ngbDateParserFormatter.format(x.startDate);
    });
    this.edulist.educationModels = this.edu;
    this.service.SaveResumeeducation(this.edulist).subscribe(x => {
      if (x.data) {
        this.router.navigate([RoutesConfig.routes.uploadresume.previewprofile]);
      }
    });
  }
  ngOnInit(): void {
    this.GetProfileOnload();
  }
  GetProfileOnload() {
    const promise1 = this.service.getemployereducation().toPromise();
    debugger;
    Promise.all([promise1]).then(([var1]) => {
      if (var1.data.length === 0) {
        this.ProcessData();
      } else {
        this.edu = var1.data;
        this.edu.forEach(x => {
          x.startDate = this.ngbDateParserFormatter.parse(x.startDate);
          x.endate = this.ngbDateParserFormatter.parse(x.endate);
        });
      }
    });
  }
  _v() {
    return this.addForm.value;
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  ProcessData() {
    if (this.edu.length === 0) {
      this.edu.push({
        degree: '',
        endate: '',
        gpA: '',
        major: '',
        name: '',
        startDate: '',
      });
    }
  }

  addRow() {
    this.edu.push({
      degree: '',
      endate: '',
      gpA: '',
      major: '',
      name: '',
      startDate: '',
    });
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {
  NgbCalendar,
  NgbDateParserFormatter,
  NgbDateStruct,
  NgbInputDatepickerConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { HistoryModel, HistoryRequestModel, ICountry } from '../../shared/upload-resume.model';
import { UploadResumeService } from '../../shared/upload-resume.service';
import { delay } from 'rxjs/operators';
import { TypeaheadSettings } from 'ngx-type-ahead';
import { RoutesConfig, ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { CommonService } from 'src/app/modules/core/services/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload-resume-empolyment-history',
  templateUrl: './upload-resume-empolyment-history.component.html',
  styleUrls: ['./upload-resume-empolyment-history.component.scss'],
})
export class UploadResumeEmpolymentHistoryComponent implements OnInit {
  public employemnthistory: HistoryModel[] = [];
  public employemnthistorylist: HistoryRequestModel = new HistoryRequestModel();
  array: any;
  public termsList: any;
  addForm: FormGroup;
  modelDob: NgbDateStruct;
  query: any;
  customSettings: Partial<TypeaheadSettings> = {
    suggestionsLimit: 0,
  };

  constructor(
    @Inject(ROUTES_CONFIG) public routesConfig: any,
    private fb: FormBuilder,
    config: NgbInputDatepickerConfig,
    calendar: NgbCalendar,
    private service: UploadResumeService,
    private commonservice: CommonService,
    private ngbDateParserFormatter: NgbDateParserFormatter,
    private router: Router
  ) {
    // customize default values of datepickers used by this component tree
    this.ProcessData();
  }

  ngOnInit(): void {
    const promise1 = this.commonservice.getterms().pipe(delay(1000)).toPromise();

    Promise.all([promise1]).then(([var1, var2]) => {
      this.termsList = var1.data;
      this.GetProfileOnload();
    });
  }
  GetProfileOnload() {
    const promise1 = this.service.getemployerhistory().toPromise();
    debugger;
    Promise.all([promise1]).then(([var1]) => {
      if (var1.data.length === 0) {
        this.ProcessData();
      } else {
        this.employemnthistory = var1.data;
        this.employemnthistory.forEach(x => {
          x.startDate = this.ngbDateParserFormatter.parse(x.startDate);
          x.endate = this.ngbDateParserFormatter.parse(x.endate);
        });
      }
    });
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  // addRow() {
  //   debugger;
  //   const details = this.addForm.get('details') as FormArray;
  //   details.push(this.createItem());
  // }
  get formArr() {
    return this.addForm.get('details') as FormArray;
  }
  employeeSkills(empIndex: number): FormArray {
    return this.formArr.at(empIndex).get('skillname') as FormArray;
  }
  onRemoveRow(rowIndex: number) {
    this.employemnthistory.splice(rowIndex, 1);
  }

  // move selected items from model 1

  doSubmit() {
    debugger;
    this.employemnthistory.forEach(x => {
      x.endate = this.ngbDateParserFormatter.format(x.endate);
      x.startDate = this.ngbDateParserFormatter.format(x.startDate);
    });
    this.employemnthistorylist.historyModels = this.employemnthistory;
    this.service.SaveResumeHistory(this.employemnthistorylist).subscribe(x => {
      if (x.data) {
        this.router.navigate([RoutesConfig.routes.uploadresume.previewprofile]);
      }
    });
  }

  ProcessData() {
    if (this.employemnthistory.length === 0) {
      this.employemnthistory.push({
        companyName: '',
        endate: '',
        skils: [],
        startDate: '',
        typeOfBusiness: '',
      });
    }
  }

  addRow() {
    this.employemnthistory.push({
      companyName: '',
      endate: '',
      skils: [],
      startDate: '',
      typeOfBusiness: '',
    });
    // }
  }
}

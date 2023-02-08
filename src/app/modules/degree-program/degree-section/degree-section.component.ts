import { Component, OnInit } from '@angular/core';
import { JsonDataModel } from '../../core/models/common.model';
import { CommonService } from '../../core/services/common.service';
import { RootObjectDegress } from '../shared/degree.model';

@Component({
  selector: 'app-degree-section',
  templateUrl: './degree-section.component.html',
  styleUrls: ['./degree-section.component.scss']
})
export class DegreeSectionComponent implements OnInit {
  public jsonModel :JsonDataModel= new JsonDataModel();
  public degreeeJson : RootObjectDegress =new RootObjectDegress();
  constructor( private commonService: CommonService,) {

   }

  ngOnInit(): void {
    debugger;
    this.commonService.getJsoncontent("F5D3C21D-5311-4458-B979-FCA52F2B61D8").subscribe(x => {
      debugger;
      if (x.data) {
        debugger;
        this.jsonModel=x.data;
        this.degreeeJson=JSON.parse(this.jsonModel.dataHeadingJson);
        // this.degreeeJson.degressProgram.push(this.degreeeJson.degressProgram);
        console.log(this.degreeeJson)
      
      }
    });
  }

}

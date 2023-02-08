import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class UploadResume {}

export class ICountry {
  code: string;
  name: string;
}
export class ProfileInfo {
  id: number;
  titleName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  homeCountryPhoneNumber: string;
  alternateNumber: string;
  addressLine1: string;
  addressLine2: string;
  cityName: string;
  stateName: string;
  postlCode: string;
  countryId: number;
  nationality: string;
  countryResidenceId: string;
  summary: string;
}

export class HistoryRequestModel {
  historyModels: HistoryModel[] = [];
}

export class HistoryModel {
  companyName: string;
  typeOfBusiness: string;
  startDate: any;
  endate: any;

  skils: Skil[] = [];
}

export class Skil {
  id: number;
  name: string;
}

export class Educatiorequestnmodel {
  educationModels: EducationModel[] = [];
}

export class EducationModel {
  name: string;
  degree: string;
  major: string;
  startDate: any;
  endate: any;
  gpA: string;
}

export class Certicationrequest {
  certifactionModels: CertifactionModel[] = [];
}

export class CertifactionModel {
  titleName: string;
  institutaion: string;
  startDate: any;
  endate: any;
  description: string;
}

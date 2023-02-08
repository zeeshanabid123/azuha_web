export interface ItemObject<T> {
    id: T;
    name: string;
}

export enum EPrivacy {
    DateOfBirth = 1,
    EmailAddress = 2,
    PhoneNumber = 3,
    BusinessLegalName = 4,
    BusinessAddress = 5,
    ZipCode = 6,
    BillingAddress = 7,
    CityState = 8,
    Password = 9,
    ContactName = 10
}

export enum EAddressType {
    Personal = 1,
	Billing = 2,
	InForm= 3,
}

export enum EUploadType {
    Document = 1,
    Image = 2,
    Video = 3,
}


export enum EProfileType {
    BusinessFitnessGym = '93151A05-220F-4A58-95B2-207598B9BAEB',
    Customers = 'F59A5A9E-C4FD-4398-8364-322894139533',
    BusinessFitnessNeutrationApp = '3458E7A8-62E3-4634-A52C-5CBD0932A6B4',
    FitnessApp = 'DC7415F0-C10D-4CBE-B5C1-AB9E62FCBD6C',
    BusinessFitnessClass = 'DC83AA84-9D16-48BF-9538-BB6A5A242409',
    FitnessTrainner = '0F558698-B929-4519-8E33-F978884933C1',
    EmptyGuid = '00000000-0000-0000-0000-000000000000'
}

export class LandingCardModel {
    id: string;
    name: string;
    imageUrl: string;
    date: string;
    profileTypeId: string;
    eProfileTypeId: EProfileType;
}

export class GeoCodeRootObject {
    results: GeoCodeResult[];
    status: string;
}

export class GeoCodeResult {
    address_components: GeoCodeAddresscomponent[];
    formatted_address: string;
    geometry: GeoCodeGeometry;
    place_id: string;
    postcode_localities: string[];
    types: string[];
}

export class GeoCodeGeometry {
    bounds: GeoCodeBounds;
    location: GeoCodeNortheast;
    location_type: string;
    viewport: GeoCodeBounds;
}

export class GeoCodeBounds {
    northeast: GeoCodeNortheast;
    southwest: GeoCodeNortheast;
}

export class GeoCodeNortheast {
    lat: number;
    lng: number;
}

export class GeoCodeAddresscomponent {
    long_name: string;
    short_name: string;
    types: string[];
}

export class OtherAdditionModel {
    id: number;
    text: string;
    isAdded = false;
}

export class FeedbackRequest {
    text: string;
    isBlogSuggestion: boolean;
    blogId: string;
}

export class CountryRequestModel{
    id: number;
    name: string;
}

export class StateRequestModel{
    id: number;
    name: string;
}

export class CityRequestModel{
    id: number;
    name: string;
    tooltip: string;
}


export class HomePageProfileModel{
    id:number;
    name: string;
    url: string;
    totalCount:number;
}

export class subscribeResponseModel {
    isError: boolean;
    message: string;
    exception: string;
    data: boolean;
  }


  export class ContactUsRequestModel {
    name: string;
    email: string;
    countryCode: string;
    phoneNumber: string;
    description: string;
  }

  export class TrainnerSearchModel {
    typeIds: string[]=[];
    skip: number;
    take: number;
  }

  export class JsonDataModel {
    id: string
    dataHeadingJson: string
    isEnabled: boolean
  }

  export class  SliderModel {
    id: string;
    imageUrl: string;
    heading: string;
    subHeading: string;
    isEnabled: boolean;
    createdOnDate: Date;
}



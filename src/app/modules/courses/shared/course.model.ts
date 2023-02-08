


export class CourseModel {
        id: string;
        courseImage: string;
        courseDuration: number;
        courseType: string;
        courseDetail: string;
        courseName: string;
        isEnabled: boolean;
    }


    
    export class AdmisionModel {
        id: string;
        courseId: number;
        name: string;
        phoneNumber: string;
        emailAddress: string;
        fatherName: string;
        dob: string;
        idCardNumber: string;
        currentAddress: string;
        city: string;
        country: string;
        prevoiusEducation: string;
        peducationFrom: string;
        courseTypeId: number;
        schoolRecordUrl: string;
        cnicurl: string;
        bformUrl: string;
    }

    export class AdmisionBasicInfoModel {
        id: string;
        name: string;
        phoneNumber: any;
        emailAddress: string;
        fatherName: string;
        dob: string;
        idCardNumber: string;
        currentAddress: string;
        city: string;
        country: string;
    }

    export class AdmisionAdmicModel {
        id: string;
        prevoiusEducation: string;
        peducationFrom: string;
        courseTypeId: number;
       
    }

    export class AdmisionUploadModel {
        id: string;
        schoolRecordUrl: string;
        cnicurl: string;
        bformUrl: string;
       
    }


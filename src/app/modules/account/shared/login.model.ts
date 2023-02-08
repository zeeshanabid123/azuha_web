export class LoginRequestModel {
    userInfo: string;
    password: string;
    deviceToken: string;
    deviceModel: string;
    os: string;
    version: string;
    deviceType: number;
    email:string;
}

export class LoginResponseModel {
    accessToken: string;
    email: string;
    firstName: string;
    lastName: string;
    name: string;
    imageThumbnailUrl: string;
    profileTypeId: string;
    userId: string;
    isSubscribed: boolean;
    isApproved:boolean;
    profileImage: any;
    userName:string
}

export class ResetPasswordModel {
    forgotLinkKey: '';
    newPassword: '';
    confirmPassword: '';
}

export class restPassowrdModel {
    id: string;
    newPassword: string;
  }

  export class ForgetPassword {
    email: string;
  }

  export class RegisterModel {
    userName: string;
    emailAddress: string;
    password: string;
    provider: string;
    provideid: string;
    image: string;
    token: string;
    idToken: string;
}
export class ExternalAuthDto {
    provider: string;
    idToken: string;
}


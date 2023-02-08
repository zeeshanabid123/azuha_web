import { InjectionToken } from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
  heroes: 'heroes',
  about: 'about-us',
  DegreeProgram: 'degree-program',
  courses:'courses',
  media:'media',

kidsCorner:'kids-corner',
upcoming:'upcoming',
contact:'contact',
socialWalfare:'social-welfare',

  account: 'account',
  blog: 'blog',
  freeClass: 'free-classes',
  trainerDashboard: 'dashboard',
  profile: 'profile',
  uploadresume: 'upload-resume'
};

const routesNames = {
  home: '',
  about: basePaths.about,
  DegreeProgram: basePaths.DegreeProgram,
  courses: basePaths.courses,
  kidsCorner: basePaths.kidsCorner,
  upcoming: basePaths.upcoming,
  media: basePaths.media,

  contact: basePaths.contact,
  socialWalfare: basePaths.socialWalfare,



  error404: '404',
  privacyPolicy: 'privacy-policy',
  termsConditions: 'terms-conditions',
  contactUs: 'contact-us',
  isoFindClub: 'find-club',
  allTrainners: 'all-trainer',



  freeClasses: basePaths.freeClass,
  trainerDashboard: {
    basePath: basePaths.trainerDashboard
  },
  heroes: {
    basePath: basePaths.heroes
  },

  profile: {
    basePath: basePaths.profile,
    trainer: 'trainer',
  },
  uploadresume: {
    basePath: basePaths.uploadresume,
    upload: 'upload',
    resumeprofile: 'resume-profile',
    resumeeducation: 'resume-education',
    empolymenthistory: 'empolyment-history',
    certification: 'certification',
    previewprofile: 'preview-profile',


  },
  account: {
    basePath: basePaths.account,
    reset: 'reset',
    login: 'login'
  },
  blog: {
    basePath: basePaths.blog,
    blogDetail: 'blog-detail'
  },
  freeClass: {
    basePath: basePaths.freeClass
  }
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    about: `/${routesNames.about}`,
    DegreeProgram: `/${routesNames.DegreeProgram}`,

    courses: `/${routesNames.courses}`,
    media: `/${routesNames.media}`,

    kidsCorner: `/${routesNames.kidsCorner}`,
    upcoming: `/${routesNames.upcoming}`,
    contact: `/${routesNames.contact}`,
    socialWalfare: `/${routesNames.socialWalfare}`,
 


    error404: `/${routesNames.error404}`,
    heroes: {
      detail: getHeroDetail
    },

    profile: {
      trainer: `/${routesNames.profile.basePath}/${routesNames.profile.trainer}`
    },

    uploadresume: {
      basePath: `/${routesNames.uploadresume.basePath}`,
      upload: `/${routesNames.uploadresume.basePath}/${routesNames.uploadresume.upload}`,
      resumeprofile: `/${routesNames.uploadresume.basePath}/${routesNames.uploadresume.resumeprofile}`,
      resumeeducation: `/${routesNames.uploadresume.basePath}/${routesNames.uploadresume.resumeeducation}`,
      empolymenthistory: `/${routesNames.uploadresume.basePath}/${routesNames.uploadresume.empolymenthistory}`,
      certification: `/${routesNames.uploadresume.basePath}/${routesNames.uploadresume.certification}`,
      previewprofile: `/${routesNames.uploadresume.basePath}/${routesNames.uploadresume.previewprofile}`,

    },
    account: {
      basePath: `/${routesNames.account.basePath}`,
      login: `/${routesNames.account.basePath}/${routesNames.account.login}`
    },
    blog: {
      basePath: `/${routesNames.blog.basePath}`,
      blogDetail: `/${routesNames.blog.basePath}/${routesNames.blog.blogDetail}`
    },
    freeClass: {
      basePath: `/${routesNames.freeClass.basePath}`,
    },
    trainerDashboard: {
      basePath: `/${routesNames.trainerDashboard.basePath}`,
    }
  }
};

export function getHeroDetail(id) {
  return `/${basePaths.heroes}/${id}`;
}

export function getLoginDetail(id) {
  return `/${routesNames.account.basePath}/${routesNames.account.login}/${id}`;
}

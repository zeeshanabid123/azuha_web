import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  votesLimit: 3,
  topHeroesLimit: 5,
  snackBarDuration: 10000,
  repositoryURL: 'https://github.com/ismaestro/angular8-example-app',
  sentryDSN: 'https://a4543df39286415d9f1c61e643dae1b8@o449805.ingest.sentry.io/5433414',
  cspDirectives: {
    defaultSrc: [
      '\'self\'',
      'data:',
      'http://*.google-analytics.com',
      'http://www.googletagmanager.com',
      'https://*.google.com',
      'https://*.google-analytics.com',
      'https://*.googletagmanager.com',
      'https://*.gstatic.com',
      'https://*.googleapis.com',
      'https://authedmine.com',
      'https://az743702.vo.msecnd.net',
      'https://sentry.io',
      'ws://localhost:4200',
      'https://*.cloudfront.net'
    ],
    frameAncestors: ['\'self\''],
    upgradeInsecureRequests: true,
    styleSrc: [
      '\'self\'',
      '\'unsafe-inline\'',
      'https://*.googleapis.com'
    ],
    scriptSrc: [
      '\'self\'',
      '\'unsafe-inline\'',
      'http://*.googletagmanager.com',
      'https://*.google-analytics.com'
    ]
  }
};

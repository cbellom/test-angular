import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {Amplify} from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    identityPoolId: 'us-east-1:d65e8fa3-dcb3-473b-97e8-4305b5de777e',
    userPoolId: 'us-east-1_u8DDtNzFL',
    userPoolWebClientId: 'd4fk0ahuop1a2j3d0tmeb3bj0',
  },
  API: {
    endpoints: [
      {
        name: 'qiipApiGateway',
        endpoint: 'https://apidev.qiip.com.mx/',
      },
    ],
  },
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

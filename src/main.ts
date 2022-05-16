import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  let consoleStyle = "color: red;" + "font-size: 60px;" + "font-weight: bold;";
  setTimeout(console.log.bind(console, '%cStop!', consoleStyle), 0);
  setTimeout(console.log.bind(console, 'This is a browser feature intended for developers.'), 0);
  window.console.log = () => {};
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

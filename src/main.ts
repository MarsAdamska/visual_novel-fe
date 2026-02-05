import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';


platformBrowser().bootstrapModule(AppModule, {

})
  .catch(err => console.error(err));

bootstrapApplication(App)
  .catch(err => console.error(err));

import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';


platformBrowser().bootstrapModule(AppModule, {

})
  .catch(err => console.error(err));

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));

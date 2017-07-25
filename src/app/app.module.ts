import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollSpyModule, ScrollSpyService } from 'ngx-scrollspy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    ScrollSpyModule.forRoot(),
  ],
  providers: [ScrollSpyService],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollSpyIndexModule } from 'ngx-scrollspy'
import { ScrollSpyAffixModule } from 'ngx-scrollspy'

import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './components/home.component';

import { PageService } from './page.service'
import { DynamicComponent } from './components/dynamic.component'

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ScrollSpyIndexModule,
    ScrollSpyAffixModule
  ],
  declarations: [
    HomeComponent,
    DynamicComponent,
  ],
  providers: [
    PageService,
  ]
})
export class PagesModule { }

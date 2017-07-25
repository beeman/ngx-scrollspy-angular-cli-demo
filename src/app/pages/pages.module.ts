import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollSpyIndexModule } from 'ngx-scrollspy/dist/plugin'
import { ScrollSpyAffixModule } from 'ngx-scrollspy/dist/plugin/affix'

import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './components/home.component';
import { TermsComponent } from './components/terms.component'

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ScrollSpyIndexModule,
    ScrollSpyAffixModule
  ],
  declarations: [
    HomeComponent,
    TermsComponent,
  ]
})
export class PagesModule { }

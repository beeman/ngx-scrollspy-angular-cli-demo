import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  exports: [
    LayoutComponent,
  ],
})
export class UiModule { }

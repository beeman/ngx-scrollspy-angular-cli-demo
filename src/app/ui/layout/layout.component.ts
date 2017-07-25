import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="container mt-4">
      <app-nav [navItems]="navItems"></app-nav>
      <div class="row mt-4">
        <div class="col-md-2">
          <app-sidebar [navItems]="navItems"></app-sidebar>
        </div>
        <div class="col-md-10">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class LayoutComponent {

  @Input() navItems = []

}

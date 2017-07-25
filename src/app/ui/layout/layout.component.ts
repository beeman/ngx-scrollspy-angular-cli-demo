import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="container pt-3">
      <app-nav [navItems]="navItems"></app-nav>
      <div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class LayoutComponent {

  @Input() navItems = []

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <ul class="nav flex-column">
      <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
          *ngFor="let item of navItems">
        <a class="nav-link" [routerLink]="item.link" [fragment]="item.fragment">{{item.label}}</a>
      </li>
    </ul>
  `,
})
export class SidebarComponent {

  @Input() navItems = []

}

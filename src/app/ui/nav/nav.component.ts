import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">ngx-scrollspy</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
              *ngFor="let item of navItems">
            <a class="nav-link" [routerLink]="item.link" [fragment]="item.fragment">{{item.label}}</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class NavComponent {

  @Input() navItems = []

}

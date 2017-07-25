import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-layout [navItems]="navItems" scrollSpy>
      <router-outlet></router-outlet>
    </app-layout>
  `,
})
export class AppComponent {
  navItems = [
    {
      label: 'Home',
      link: ['/', 'home'],
    },
    {
      label: 'Terms',
      link: ['/', 'terms'],
    },
  ]

}

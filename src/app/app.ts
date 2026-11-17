import { Component, inject, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationResource } from './core/resources/authentication-resource';

@Component({
  selector: 'bwz-root',
  imports: [RouterOutlet],
  template:
    `<router-outlet></router-outlet>`,
  styles: ``
})
export class App {
  /* example code for login:
  authSvc = inject(AuthenticationResource);
  ngOnInit() {
    this.authSvc.login({ login: "bmueller", password: '$user1234'}).subscribe(confirmation => {
      console.log(confirmation);
    });
  }
  */
}

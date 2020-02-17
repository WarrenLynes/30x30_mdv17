import { Component } from '@angular/core';
import { AppFacade, AuthFacade } from '@mdv17/core-state';

@Component({
  selector: 'mdv17-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  links = [
    {path: '', title: 'phones', icon: 'access_time'},
  ];

  constructor (
    public facade: AppFacade,
    private authFacade: AuthFacade
  ) { this.facade.initialize(); }

  onLogout() { this.authFacade.logout(); }


}

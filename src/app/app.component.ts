import { Component } from '@angular/core';
import {trigger, transition, style, animate, state} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideLeft', [
      state('open', style({
        width: '*',
        flex: '0 1 20%',
        color: 'pink',
      })),
      state('closed', style({
        width: '0',
        flex: '0 1 0',
        color: 'blue',
      })),
      transition('open <=> closed', animate('120ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  menuOpen = true;

  defaultState(event) {
    this.menuOpen = event;
  }
}

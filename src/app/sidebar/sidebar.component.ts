import {Component, Input, OnInit} from '@angular/core';
import {trigger, animate, state, style, transition} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
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
export class SidebarComponent implements OnInit {

  @Input() menuOpen = true;

  constructor() { }

  ngOnInit() {
  }

}

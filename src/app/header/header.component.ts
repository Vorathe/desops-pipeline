import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuOpen = new EventEmitter<any>();

  menuState = true;

  constructor() { }

  ngOnInit() {
  }

  openMenu() {
    this.menuOpen.emit(this.menuState = !this.menuState);
  }

}

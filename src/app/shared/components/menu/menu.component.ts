import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'tl-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Logout', icon:'pi pi-sign-out',command:()=>this.authService.logout()},

    ];
  }
}

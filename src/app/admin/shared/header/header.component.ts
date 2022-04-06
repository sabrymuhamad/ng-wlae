import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { AdminUser } from '../models/admin.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  admin: AdminUser = new AdminUser();

  constructor(public login:AuthLoginService) { }

  ngOnInit(): void {
    this.admin = JSON.parse(localStorage.getItem('wleUser'));
  }

}

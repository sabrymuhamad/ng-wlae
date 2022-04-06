import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { ToastrService } from 'ngx-toastr';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loading: boolean;
  userStatusSub: Subscription;
  constructor(private router: Router, private route: ActivatedRoute, private loginService: AuthLoginService, private toastr: ToastrService, private auth: AuthGuardService) { }

  ngOnInit(): void {
    this.router.navigate([], {
      queryParams: { login: true },
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: true
      // do not trigger navigation
    });


    if (this.auth.tokenExp())
      this.router.navigate(['/admin/dashboard'])
  }

  login() {
    this.loading = true;
    let login = {
      email: this.username,
      password: this.password
    }

    this.loginService.login(login).subscribe((res) => {
      this.loading = false;
      this.toastr.success('Welcome admin!');
      this.router.navigate(['/admin/dashboard']);
    }, (err) => {
      this.loading = false;
      this.toastr.error('something went wrong!');

    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    .center {
      display: grid;
      place-content: center;
      height: 100vh;
    }
  `]
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  login () {
    // Ir al backend
    // Debe haber un usuario
    this.authService.login().subscribe(response => {
      console.log(response);

      if (response.id) {
        this.router.navigate(['./avengers'])
      }
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient) {}
  userEmail: string = '';
  password: string = '';
  status: string = '';
  warning: string = '';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  protector = false;

  eye() {
    this.protector = !this.protector;
  }

  login(loginData: any) {
    console.log(loginData);

    this.http.post('http://localhost:8080/login', loginData).subscribe(
      (response:any) => {
        console.log(response);
        this.router.navigate(['dashboard']);
        localStorage.setItem('role',response.role);
        localStorage.setItem('id',response.id);
        localStorage.setItem('username',response.username);
        localStorage.setItem('email',response.email);
        if(response.role === 'user'){
          this.router.navigate(['dashboard']); 
        } else {
          this.router.navigate(['admin']); 
        }
      },
      (error) => {
        this.status = 'login Failed';
        this.warning = error.error;
        console.log(error);
      }
    );
  }
}

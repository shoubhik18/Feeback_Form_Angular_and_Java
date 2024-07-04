import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  forms: any;
  fasignout = faSignOut;
  delete = faTrash;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get('http://localhost:8080/allReviews').subscribe((data: any) => {
      this.forms = data;
    });
  }

  removeReview(id: any) {
    console.log(id);
    this.http
      .delete(`http://localhost:8080/deleteReview/${id}`)
      .subscribe((response) => {
        console.log(response);
        window.location.reload();
      });
  }

  signOut() {
    this.router.navigate(['']);
    localStorage.clear();
  }
}

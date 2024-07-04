import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private http: HttpClient, private router:Router) {}

  email: any = localStorage.getItem('email');
  forms: any;
  fasignout = faSignOut;

  ngOnInit() {
    this.http
      .get(`http://localhost:8080/getFormsByEmail/${this.email}`)
      .subscribe((result) => {
        this.forms = result;
      });
  }

  submitForm(formData: any) {
    console.log(formData);

    this.http
      .post(`http://localhost:8080/submitForm/${this.email}`, formData)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateReview(formData:any){
    console.log(formData);

    this.http.put(`http://localhost:8080/editForm/${formData.id}`,formData,{responseType:'text'}).subscribe((response)=>{
      console.log(response);
      alert('Form updated !!')
      
    },error=>{
      console.log(error);
      
    })
    
  }

  signOut() {
    this.router.navigate(['']);
    localStorage.clear();
  }

}

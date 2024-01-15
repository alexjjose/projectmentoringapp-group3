import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batchcordinator',
  templateUrl: './batchcordinator.component.html',
  styleUrls: ['./batchcordinator.component.css']
})
export class BatchcordinatorComponent implements OnInit {
  
  credentials = {
    email:'',
    password:''
  };

  constructor(private api:ApiService, private router: Router) { }


  
  
        

  ngOnInit(): void {
  }



login(): void {
  if (this.credentials.email === 'admin@gmail.com' && this.credentials.password === 'admin11') {
    this.api.login(this.credentials).subscribe(
      (response) => {
        console.log("Login successful", response);

        console.log('About to navigate to student dash');

        this.router.navigate(['/admindash']);

        alert("Login Successfully");
      },
      (error) => {
        console.error("Login failed", error);
      }
    );
  } else {
    console.log("Invalid credentials");
    alert("Invalid credentials. Login failed.");
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  authForm: FormGroup;
  submitted = false;
  error = '';
  hide = true;
  constructor(
     private formBuilder: FormBuilder,
     private route: ActivatedRoute,
     private router: Router,
    // private authService: AuthService
  ) {}
  ngOnInit() {
     this.authForm = this.formBuilder.group({
       username: ['admin@school.org', Validators.required],
       password: ['admin@123', Validators.required],
     });
  }
   get f() {
     return this.authForm.controls;
   }
  userSet() {
     this.authForm.get('username')?.setValue('admin@school.org');
     this.authForm.get('password')?.setValue('admin@123');
  }
  
  onSubmit() {
     this.submitted = true;
     this.error = '';
     if (this.authForm.invalid) {
       this.error = 'Username and Password not valid !';
       return;
     } 
     //else {
       //this.authService
       //  .login(this.f["username"].value, this.f["password"].value)}
    //     .subscribe(
    //       (res) => {
    //         if (res) {
    //           const role = this.authService.currentUserValue.role;
    //           if (role === Role.All || role === Role.Admin) {
    //             this.router.navigate(['/admin/dashboard/main']);
    //           } else if (role === Role.Teacher) {
    //             this.router.navigate(['/teacher/dashboard']);
    //           } else if (role === Role.Student) {
    //             this.router.navigate(['/student/dashboard']);
    //           } else {
    //             this.router.navigate(['/authentication/signin']);
    //           }
    //         } else {
    //           this.error = 'Invalid Login';
    //         }
    //       },
    //       (error) => {
    //         this.error = error;
    //         this.submitted = false;
    //       }
    //     );
    // }
  
    }
}

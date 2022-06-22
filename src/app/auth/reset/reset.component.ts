import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.sass']
})
export class ResetComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) {}
    ngOnInit() {
      this.authForm = this.formBuilder.group({
        email: [
          '',
          [Validators.required, Validators.email, Validators.minLength(5)],
        ],
      });
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';}
      get f() {
        return this.authForm.controls;
      }
      onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.invalid) {
          return;
        } else {
          this.router.navigate(['/dashboard/main']);
        }
      }
    }

    


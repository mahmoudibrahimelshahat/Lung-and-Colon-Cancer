import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/_api/user.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  typeInput: string = 'password';
  errorMsg: string;
  loading: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private title:Title,
    private toastr: ToastrService
  ) {
    this.title.setTitle("Hospital - Login");
    // if (this.userService.isLoggedIn()) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
      password: [null, [Validators.required]],
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  showSuccess() {
    this.toastr.success('Login Successfully');
  }

  showError() {
    this.toastr.error('Login Failed');
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      this.userService.login(form.value).subscribe(result => {
        this.loading = false;
        this.showSuccess();
        localStorage.setItem('token', result.token);
        this.router.navigate(['/']);
      }, error => {
        this.loading = false;
        this.toastr.error('Login Failed');
        this.errorMsg = error.error.message;
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {SignupService} from '../../services/_api/signup.service'
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  typeInput: string = 'password';

  registerationForm: FormGroup; 
  isEdit: boolean = false;

  constructor(private route: ActivatedRoute, private signupService: SignupService,private title:Title,private toastr: ToastrService
    ) {
    this.title.setTitle("Hospital - Sign Up");
  }
  ngOnInit() {
    this.registerationForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
      password: new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z0-9]{8,}$")]),
      gender: new FormControl('', Validators.required)
    })
  }

  get email() {
    return this.registerationForm.get('email');
  }
  showSuccess() {
    this.toastr.success('Data Sent Successfully');
  }

  showError() {
    this.toastr.error('This email already exists'); 
  }
  onSubmit(form: FormGroup) {
    if (form.valid) {
      // console.log(form.value)
      this.signupService.createUser(form.value).subscribe(result => {
        // console.log(result);
        this.showSuccess();
        form.reset();
      }, error => {
        this.toastr.error('This email already exists');
        console.log(error)
      })
    }
  }

}

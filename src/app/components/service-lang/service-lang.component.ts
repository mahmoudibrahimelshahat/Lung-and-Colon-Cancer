import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/app/services/_api/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/_api/patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service-lang',
  templateUrl: './service-lang.component.html',
  styleUrls: ['./service-lang.component.css']
})
export class ServiceLangComponent implements OnInit {
  typeInput: string = 'password';
  PatientForm: FormGroup;
  isEdit: boolean = false;
  loading: boolean = false;
  result: Array<Object>;
  myColor;
  showButton:boolean  = false;
  showsecond:boolean = false;
  printData = {};
  SERVER_URL = "http://127.0.0.1:8000/lung";
  uploadForm: FormGroup;
  imgURL

  // change profile to file
  constructor(private route: ActivatedRoute, private PatientService: PatientService,private cd: ChangeDetectorRef,

     private userService: UserService, private title: Title, private formBuilder: FormBuilder, 
     private httpClient: HttpClient,private toastr: ToastrService) {
    this.title.setTitle("Hospital - Services");
  }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      file: ['']
    });

    this.PatientForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      secondName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
      gender: new FormControl('', Validators.required),
      age: new FormControl(null, [Validators.required, Validators.minLength(1)]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(11),Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]),
      address: new FormControl(null, [Validators.required, Validators.minLength(9)]),
      result: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    })
  }

  setImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('file').setValue(file);
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.showsecond = true;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.value.file);
    // let headers = new HttpHeaders();
    // headers = headers.set('Postman-Token', '<calculated when request is sent>').set('Content-Type', 'multipart/form-data; boundary=<calculated when request is sent>').set('Host', '<calculated when request is sent>').set('Content-Length', '<calculated when request is sent>').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');

    console.log(formData);
    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(result => {
      // this.result = "data send successfuly";
      this.result = result;
      console.log(result);



      // this.result = result;
    }, error => {
      this.toastr.error('Something Is Wrong');
      // this.result = "an error have been occur";
      console.log(error);
    })
  }

  get email() {
    return this.PatientForm.get('email');
  }

  showSuccess() {
    this.toastr.success('Data Sent Successfully');
  }

  showError() {
    this.toastr.error('This email already exists');
  }

  onSubmitt(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      this.printData = form.value; // for backup data
      this.PatientService.createPatient(form.value).subscribe(result => {
        this.loading = false;
        this.showSuccess();
        // new update
        this.showButton = true;
        // 
      }, error => {
        this.loading = false;
        this.toastr.error('This email already exists');
        console.log(error)
      })
    }
  }
  printComponent(cmpName) {
   
     this.PatientForm.reset();
    this.cd.detectChanges();

    let popupWinindow
    let innerContents = document.getElementById(cmpName).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=1100,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open(); 
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
    // new update
    this.showButton = false;
    // 

}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../../interfaces/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

 // USER_API: string = 'https://jobs-nodejs.herokuapp.com/api/users/signin/';
 USER_API : string = 'https://fcihosi.herokuapp.com/api/form';
 constructor(private http: HttpClient) { }

 createPatient(value: Patient) {
   return this.http.post(this.USER_API, value);
 }
}

import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {

  // USER_API: string = 'https://jobs-nodejs.herokuapp.com/api/users/signin/';
  USER_API : string = 'https://fcihosi.herokuapp.com/api/users';
  constructor(private http: HttpClient) { }

  createUser(value: User) {
    return this.http.post(this.USER_API, value);
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {SignupService} from '../../services/_api/signup.service'

const routes: Routes = [
    {
      path: '',
      component: SignupComponent
    }
  ];
   
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MatButtonModule
    ],
    declarations: [SignupComponent],
    exports: [SignupComponent],
    providers : [SignupService]
})
export class SignupModule { }
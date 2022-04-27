import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    }
  ];
   
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule { }
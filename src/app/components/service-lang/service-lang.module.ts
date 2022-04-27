import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// 
import { ReactiveFormsModule } from '@angular/forms';
// 
import { ServiceLangComponent } from './service-lang.component';
import { SignupService } from 'src/app/services/_api/signup.service';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';


const routes: Routes = [
    {
      path: '',
      component: ServiceLangComponent
    }
  ];
   
@NgModule({
    imports: [
        CommonModule,
        //t3del
        ReactiveFormsModule,
        HttpClientModule,
        MatSelectModule,
        // 
        RouterModule.forChild(routes),
    ],
    declarations: [ServiceLangComponent],
    exports: [ServiceLangComponent],
    providers : [SignupService]
})
export class ServiceLangModule { }
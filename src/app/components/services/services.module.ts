import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import {MatSelectModule} from '@angular/material/select';
import { SignupService } from 'src/app/services/_api/signup.service';
import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [
    {
      path: '',
      component: ServicesComponent
    }
  ];
   
@NgModule({
    imports: [
        CommonModule,
        MatSelectModule,
        MatButtonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [ServicesComponent],
    exports: [ServicesComponent],
    providers : [SignupService]
})
export class ServicesModule { }
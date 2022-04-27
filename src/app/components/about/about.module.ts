import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { FirstAboutComponent } from './first-about/first-about.component';
import { SecondAboutComponent } from './second-about/second-about.component';

const routes: Routes = [
    {
      path: '',
      component: AboutComponent
    }
  ];
   
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [AboutComponent, FirstAboutComponent, SecondAboutComponent],
    exports: [AboutComponent]
})
export class AboutModule { }
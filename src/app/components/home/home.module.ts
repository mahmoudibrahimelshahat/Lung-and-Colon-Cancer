import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';
import { FifthComponentComponent } from './fifth-component/fifth-component.component';
import { SixthComponentComponent } from './sixth-component/sixth-component.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CountUpModule } from 'ngx-countup';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    }
  ];
   
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CarouselModule,
        MatProgressBarModule,
        CountUpModule

    ],
    declarations: [HomeComponent, FirstComponentComponent, SecondComponentComponent, ThirdComponentComponent, FourthComponentComponent, FifthComponentComponent, SixthComponentComponent],
    exports: [HomeComponent]
})
export class HomeModule { }
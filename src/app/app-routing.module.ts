import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotfoundComponent } from './const-component/page-notfound/page-notfound.component';
import { AuthGuard } from './services/_api/auth-guard.service';
import { TokenGuard } from './services/_api/token-guard.service';

const routes: Routes = [
  {
    path: "",
    canActivate: [TokenGuard],
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "about",
    canActivate: [TokenGuard],
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
  },
  {
    path: "services",
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: "service-lang",
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/service-lang/service-lang.module').then(m => m.ServiceLangModule)
  },
  {
    path: "signup",
    canActivate: [TokenGuard],
    loadChildren: () => import('./components/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: "colon",
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/colon/colon.module').then(m => m.ColonModule)
  },
  {
    path: "login",
    canActivate: [TokenGuard],
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path:"**",
    component: PageNotfoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

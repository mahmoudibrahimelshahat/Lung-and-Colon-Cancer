import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../_api/user.service';

@Injectable()
export class TokenGuard implements CanActivate {
    constructor(public userService: UserService, public router: Router) { }
    canActivate(): boolean {
        if (this.userService.isLoggedIn()) {
            this.router.navigate(['services']);
            return false;
        }
        return true;
    }
}
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/_api/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public userService : UserService) { }

  ngOnInit(): void {
  }

}

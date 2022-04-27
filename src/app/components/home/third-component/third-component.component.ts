import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent implements OnInit {
  doSomethingOnComplete: any
  constructor() { }

  items = [];
  
  ngOnInit(): void {
    this.items = [
      {
        img: "assets/home/6.png",
        case: "Take Your Medicine"
       
      },
      {
        img: "assets/home/7.png",
        case: "Consult your doctor"
      },
      {
        img: "assets/home/8.png",
        case: "Make an appointment"
      },
      {
        img: "assets/home/9.png",
        case: "Visit Your Doctor"
      }
    ]
  }

}

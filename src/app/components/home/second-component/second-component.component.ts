import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  items = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        img: "assets/home/quote.png",
        title: "Prior to my stay at Brivona, I was aware of their stellar reputation and multiple friends commented about how lucky I was to have my surgery scheduled there. As a result my expectations were high and yet the kind and professional staff with excellent patient care surpassed them.",
        titlesmall: "Raymon Myers",
        status: "Patient"
      },
      {
        img: "assets/home/quote.png",
        title: "Great co workers, really good environment and excellent patient care. They are continuously innovating themselves which is why they remain a premier dental clinic.This was the cleanest medical establishment I've ever been in. They just loved the welcoming and warm atmosphere in there.",
        titlesmall: "Ashley Foster",
        status: "Patient"
      },
      {
        img: "assets/home/quote.png",
        title: "The doctors and nurses and aides were excellent. The food was excellent. I am feeling fine and very lucky, back to my old self again and it feels great. Thank God for clinics such as yours. I appreciate all your kindness and good care you gave me is beyond my expectations they wonder for me.",
        titlesmall: "Alan Sears",
        status: "Patient"
      }
    ]
  }

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 900,
    // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    // navText : [""],
    responsive: {
      0: {
        items: 1
      },
      // 400: {
      //   items: 2
      // },
      // 740: {
      //   items: 3
      // },
    },
    nav: false
  }

}

import { Component, HostListener } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital';
  minHeight: number = 0

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    });
  }
  ngOnInit(){
    AOS.init();
  }
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      window.scrollTo(0, 0);
      // this.progressRef.start();
    }
    if (event instanceof NavigationEnd) {
      // this.progressRef.complete();
      // if (typeof window !== 'undefined') {
      // this.document.documentElement.scrollTop = 0;
      // this.document.body.scrollTop = 0;
      // }
    }

    if (event instanceof NavigationCancel) {
      // this.progressRef.complete();
    }

    if (event instanceof NavigationError) {
      // this.progressRef.setConfig({ color: 'red' });
      // this.progressRef.complete();
    }
    // this.minHeight = window.innerHeight - (65 + 48);
         this.minHeight = window.innerHeight - (89 + 367);
  }
  //---------- for arrow -------
  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
//---------- end of arrow --------
}
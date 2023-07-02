import { Component, OnInit } from '@angular/core';
import { PluginsService } from './sofbox/plugins.service';
import { Router, NavigationEnd} from "@angular/router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2uQiX4UHQRb8IRpTsnpKmZH57DuGWM4Y",
  authDomain: "tektron-consulting.firebaseapp.com",
  projectId: "tektron-consulting",
  storageBucket: "tektron-consulting.appspot.com",
  messagingSenderId: "936135436553",
  appId: "1:936135436553:web:98defe2dd9255d4a2f8bd8",
  measurementId: "G-10WDG952FH"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private plugins: PluginsService, private router: Router) { }

  title = 'sofbox-angular';

  ngOnInit() {
    initializeApp(firebaseConfig);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}

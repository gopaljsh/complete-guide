import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadFeature = 'recipe';

  constructor() { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDWA5CndD6weGNToY8CDM8aZCEY4UcKI2I",
      authDomain: "ng-recipe-book-4c2fc.firebaseapp.com"
    });
  }

  onNavigation(featureEvent: string) {
    this.loadFeature = featureEvent;
  }

}

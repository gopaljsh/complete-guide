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
      
      
    });
  }

  onNavigation(featureEvent: string) {
    this.loadFeature = featureEvent;
  }

}

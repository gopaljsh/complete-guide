import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { dataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStoreService: dataStorageService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStoreService.storeRecipes()
    .subscribe(
      (response: Response) => console.log(response)
    );
  }

  onFetchData() {
    this.dataStoreService.getRecipes();
  }

  onLogout() {
    this.authService.logOut();
  }

}

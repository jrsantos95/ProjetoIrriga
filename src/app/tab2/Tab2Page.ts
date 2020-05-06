import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Tab1Page } from './../tab1/tab1.page';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  latitude: string;
  longitude: string;
  NavController: any;
  constructor(private storage: Storage) {
    this.storage.get('location').then((val) => {
      if (val != null) {
        let location = JSON.parse(val);
        this.latitude = location.latitude;
        this.longitude = location.longitude;
      }
      else {
        this.latitude = '42.3601';
        this.longitude = '-71.0589';
      }
    });
  }
  saveForm() {
    let location = {
      latitude: this.latitude,
      longitude: this.longitude
    };
    this.storage.set('location', JSON.stringify(location));
    this.NavController.push(Tab1Page);
  }
}

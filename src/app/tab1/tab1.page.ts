import { Component } from '@angular/core';
import { Tempo } from '../../providers/tempo/tempo';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  tempo: any;
  location: {
    latitude: string,
    longitude: string
  };

  constructor(
              public navCtrl: NavController,
              private tempoProvedor: Tempo,
              private storage: Storage) {
    console.log('Olá Tempo');
  }

  ionViewWillEnter() {
    this.storage.get('locarion').then((val) =>{
      if(val != null){
        this.location = JSON.parse(val);
      } else {
              this.location = {
                latitude: '42.3601',//Boston, como no exemplo
                longitude: '-71.0589'
              };
             }
    });

    this.tempoProvedor.getTempo(this.location.latitude, this.location.longitude)
    .subscribe(
      tempo => {
        this.tempo = tempo; //currently //minutely -- assim pega por minuto com delay(54000) = 15minutos
      });
  }
}

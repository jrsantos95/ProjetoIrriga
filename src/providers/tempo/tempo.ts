import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class Tempo {
    apiKeyIrriga = 'cc57eded744c264838f0f10fec22fca4';
    apiKeyTeste = '99dfe35fcb7de1ee';
    readonly url;
    resultado$: Observable<any>;

    constructor(public navCtrl: NavController, public http: HttpClient) {
        console.log('Olá Tempo');
        //https://api.darksky.net/forecast/[key]/[latitude],[longitude]
        this.url = 'https://api.darksky.net/forecast/' + this.apiKeyIrriga;
    }

    getTempo(latitude, longitude) {
        return this.http.get(this.url + '/' + latitude + ',' + longitude)
        //.map(res => res.json());
    }
}

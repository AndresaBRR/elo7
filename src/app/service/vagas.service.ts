import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  API_URL = 'http://www.mocky.io/v2/5d6fb6b1310000f89166087b';

  constructor(private http: HttpClient) {}

  getListaVagas() {
    return this.http.get(this.API_URL);
  }
}

import { Component, HostListener, OnInit } from '@angular/core';
import { VagasService } from '../service/vagas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  vagas: any[] = [];

  constructor(private vagasService: VagasService) {
    this.getListaVagas();
  }

  getListaVagas() {
    this.vagasService
      .getListaVagas()
      .subscribe((response: any) => {
        console.log(response);
        this.vagas = response.vagas;
      });
  }

}

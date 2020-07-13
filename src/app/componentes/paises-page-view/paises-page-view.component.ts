import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestCountriesService} from '../../services/rest-countries.service';

@Component({
  selector: 'app-paises-page-view',
  templateUrl: './paises-page-view.component.html',
  styleUrls: ['./paises-page-view.component.css']
})
export class PaisesPageViewComponent implements OnInit {

  parametro: string;
  pais;
  espera = false;

  constructor(private activatedRoute: ActivatedRoute,
              private service: RestCountriesService) {
  }

  getParam() {
    this.activatedRoute.params.subscribe(param => this.parametro = param.name);
  }
  getCountri() {
    this.getParam();
    setTimeout(async ()=>{
      this.pais = await this.service.getcountri(this.parametro).toPromise();
      this.espera = true;
    },1000)

  }




  ngOnInit(): void {
    this.getCountri();
  }

}

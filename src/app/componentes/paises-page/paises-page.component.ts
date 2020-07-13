import {Component, OnInit} from '@angular/core';
import {RestCountriesService} from '../../services/rest-countries.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-paises-page',
  templateUrl: './paises-page.component.html',
  styleUrls: ['./paises-page.component.css']
})
export class PaisesPageComponent implements OnInit {

  paises = [];
  regiones = ['americas', 'asia', 'europe', 'africa'];
  loading = false;
  error : string;
  estadoError: boolean;

  constructor(private service: RestCountriesService,
              private router: Router) {
  }

  async getCountries(region: string) {
    this.estadoError = false;
    this.loading = false;
    setTimeout(() => {
      this.service.getAllCountries(region).subscribe((pais: []) => {
        this.paises = pais;
        this.loading = true;
      });
    }, 1000);

  }

  ngOnInit(): void {
    this.getCountries(this.regiones[0]);
  }

  viewPais(name: string) {
    this.router.navigate(['/view', name]);
  }

  searchCountri(pais: string) {
    if (pais === '') {
      this.getCountries(this.regiones[0])
    } else {
      this.service.getcountri(pais).subscribe(pais => {
        this.paises = [];
        this.paises.push(pais);
      }, Err =>{
        this.estadoError = true;
        this.error = `Error : ${Err.message}`;
      });
    }
  }
}

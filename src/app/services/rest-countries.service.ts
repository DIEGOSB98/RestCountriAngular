import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {

  constructor(private http: HttpClient) {
  }

  getAllCountries(region: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/region/${region}`);
  }

  getcountri(name: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}`).pipe(map(data => data[0]));
  }
}

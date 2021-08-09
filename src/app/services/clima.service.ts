import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(
    private http: HttpClient
  ) { }

  fetchUrl= "https://api.openweathermap.org/data/2.5/weather?id=524901&appid=01167dc0e11d0746543c88622fcc07dc&q=buenos+aires&units=metric&lang=es "

  getClima(){
    return this.http.get<any>(this.fetchUrl);
  }
}

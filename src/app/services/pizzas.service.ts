import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(private http:HttpClient) { }

  getPizzas(){
    return this.http.get('assets/db/menu-principal.json');
  }


}

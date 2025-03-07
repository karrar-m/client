import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPagnation } from '../shared/Models/Pagnation';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private http: HttpClient) { }

  baseURL = 'https://localhost:5001/api/';
  
  getProduct(){
    return this.http.get<IPagnation>(this.baseURL + 'products');
  }
}

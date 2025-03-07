import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IPagnation } from '../shared/Models/Pagnation';
import { IProduct } from '../shared/Models/Product';
import { __values } from 'tslib';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  constructor(private shopService:ShopService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  product: IProduct|any ;
 getAllProducts(){
this.shopService.getProduct().subscribe({
  next : (value : IPagnation) => {
    this.product = value.data;
  }
})
}
}

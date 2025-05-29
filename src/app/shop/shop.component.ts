import { Component, OnInit } from '@angular/core'; // تأكد من استيراد Component و OnInit
import { ShopService } from './shop.service';
import { IPagnation } from '../shared/Models/Pagnation';
import { IProduct } from '../shared/Models/Product';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'], // ✅ جمع
})
export class ShopComponent implements OnInit {
  product: IProduct[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getAllProducts(); 
  }

  getAllProducts(): void {
    this.shopService.getProduct().subscribe({
      next: (value: IPagnation) => {
       // this.product = value.data;
      },
      error: (err) => {
        console.error('خطأ في جلب المنتجات:', err);
      },
    });
  }
}
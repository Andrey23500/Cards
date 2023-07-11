import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products!: Product[];
  constructor(private service: ProductService,) { }

  ngOnInit(): void {
    this.products = this.service.getAllProducts();
  }
}

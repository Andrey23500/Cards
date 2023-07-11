import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.models';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id: number;
  product!: Product | null;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
  ) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.product = this.service.getOneProduct(this.id);
  }

}

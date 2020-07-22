import { Component, OnInit } from '@angular/core';

import { Product } from './../models/product';



@Component({

  selector: 'app-product-list',

  templateUrl: './product-list.component.html',

  styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor() { }



  ngOnInit(): void {

    const p1 = new Product("01","Ipad", 100.0, 3, true, 'abc');

    const p2 = new Product("02","Ipod", 200.50, 2, true, 'def');

    const p3 = new Product("03","Imac", 300.75,3, false, 'ghi');

    const p4 = new Product("03","Iloveu", 300.75,3, false, 'jkl');

    this.products.push(p1, p2, p3, p4);

  }





}
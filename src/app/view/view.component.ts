import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from '../../../server/products.json';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  products = data.products;
  currentProduct: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    console.log(params.get('ID'))
    const id = params.get("ID");
    this.currentProduct = this.products.find(element => element.ID === id)
    });
  }
}

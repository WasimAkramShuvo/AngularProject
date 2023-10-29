import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as data from '../../../server/products.json';

console.log(data);

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products = data.products;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    // this.dataService.sendGetRequest().subscribe((data) => {
    //   console.log(data);
    //   this.products = data;
    //})
  }

}

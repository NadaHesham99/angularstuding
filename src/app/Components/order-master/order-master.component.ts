import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit {
  catList :ICategory[];
  selectCateID :number =0;
  receviedOrderTotalPrice :number =0;
  constructor() { 
    this.catList=[
      {id:1 , name:"Laptops"},
      {id:2, name:"Tablet"},
      {id:3,name:"Mobile"}
    ]
  }

  ngOnInit(): void {
  }
  UpdateTotalprice(totalPrice:number){
    this.receviedOrderTotalPrice = totalPrice;
  }
}

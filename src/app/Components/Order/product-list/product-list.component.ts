import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  prodList:IProduct[];
  catList:ICategory[];
  selectedCategoryID:number=0;
  OrderTotalPrice:number = 0;
  constructor() { 
    this.prodList = [
      {id:100,name:'Lenevo ThinqPad Laptop' , price:100,quantity:3,imageURL:'https://fakeimg.pl/200x100/',categoryId:1},
      {id:200,name:'HP Laptop' , price:600,quantity:0,imageURL:'https://fakeimg.pl/200x100/',categoryId:1},
      {id:300,name:'DELL Laptop' , price:700,quantity:10,imageURL:'https://fakeimg.pl/200x100/',categoryId:2},
      {id:400,name:'MAC Book' , price:800,quantity:2,imageURL:'https://fakeimg.pl/200x100/',categoryId:2},
      {id:500,name:'Lenevo Tab2' , price:500,quantity:0,imageURL:'https://fakeimg.pl/200x100/',categoryId:3},
      {id:600,name:'MAC Tablet' , price:200,quantity:1,imageURL:'https://fakeimg.pl/200x100/',categoryId:3}
    ]
    this.catList=[
      {id:1 , name:"Laptops"},
      {id:2, name:"Tablet"},
      {id:3,name:"Mobile"}
    ]
  }

  ngOnInit(): void {
  }
  buy(prdPrice:any , count:any){
    //let itemCount:number = +count; //to convert count of type any to type number
      this.OrderTotalPrice = +prdPrice * +count;
  }
  prdTrackByFn(index:number , prd:IProduct):number{
    return prd.id;
  }
}

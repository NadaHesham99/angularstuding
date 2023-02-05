import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit , OnChanges{
  private prodList:IProduct[];
  prdCatList :IProduct[] =[];
  //catList:ICategory[];
  //selectedCategoryID:number=0;
  OrderTotalPrice:number = 0;
  @Output() OnTotalPriceChanges : EventEmitter<number>;
 
  @Input() ReceivedselectedCategoryID:number=0;



  constructor() { 
    this.OnTotalPriceChanges = new EventEmitter<number>();
    this.prodList = [
      {id:100,name:'Lenevo ThinqPad Laptop' , price:100000000,quantity:3,imageURL:'https://fakeimg.pl/200x100/',categoryId:1},
      {id:200,name:'HP Laptop' , price:6040505050,quantity:0,imageURL:'https://fakeimg.pl/200x100/',categoryId:1},
      {id:300,name:'DELL Laptop' , price:743500500,quantity:10,imageURL:'https://fakeimg.pl/200x100/',categoryId:2},
      {id:400,name:'MAC Book' , price:800000000,quantity:2,imageURL:'https://fakeimg.pl/200x100/',categoryId:2},
      {id:500,name:'Lenevo Tab2' , price:503030500,quantity:0,imageURL:'https://fakeimg.pl/200x100/',categoryId:3},
      {id:600,name:'MAC Tablet' , price:20400500,quantity:1,imageURL:'https://fakeimg.pl/200x100/',categoryId:3}
    ]
    // this.catList=[
    //   {id:1 , name:"Laptops"},
    //   {id:2, name:"Tablet"},
    //   {id:3,name:"Mobile"}
    // ]
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.ReceivedselectedCategoryID == 0){
      this.prdCatList = this.prodList
    }
    else{
      this.prdCatList = this.prodList.filter(prd=> prd.categoryId == this.ReceivedselectedCategoryID);
    }
  }

  ngOnInit(): void {
  }
  buy(prdPrice:any , count:any){
    //let itemCount:number = +count; //to convert count of type any to type number
    this.OrderTotalPrice = +prdPrice * +count;

    this.OnTotalPriceChanges.emit(this.OrderTotalPrice);
  }
  prdTrackByFn(index:number , prd:IProduct):number{
    return prd.id;
  }
}

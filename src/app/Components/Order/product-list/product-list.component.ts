import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit , OnChanges{
  //private prodList:IProduct[];
  prdCatList :IProduct[] =[];
  //catList:ICategory[];
  //selectedCategoryID:number=0;
  OrderTotalPrice:number = 0;
  @Output() OnTotalPriceChanges : EventEmitter<number>;
 
 @Output() OnAddToCart : EventEmitter<Cart>;

  @Input() ReceivedselectedCategoryID:number=0;



  constructor(private prdService:ProductsService,
              private router:Router) { 
    this.OnTotalPriceChanges = new EventEmitter<number>();
    this.OnAddToCart = new EventEmitter<Cart>();
    this.prdCatList = this.prdService.getAllProducts();
    // this.catList=[
    //   {id:1 , name:"Laptops"},
    //   {id:2, name:"Tablet"},
    //   {id:3,name:"Mobile"}
    // ]
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log(this.ReceivedselectedCategoryID)
    // if(this.ReceivedselectedCategoryID == 0){
    //   this.prdCatList = this.prodList
    // }
    // else{
    //   this.prdCatList = this.prodList.filter(prd=> prd.categoryId == this.ReceivedselectedCategoryID);
    // }
   this.prdCatList =  this.prdService.getProductsByCatId(this.ReceivedselectedCategoryID);
  }

  ngOnInit(): void {
    this.prdCatList =this.prdService.getProductsByCatId(this.ReceivedselectedCategoryID);
  }
  buy(prditem:any,prdName:any,prdPrice:any , count:any){
    let itemCount:number = +count; //to convert count of type any to type number
    this.OrderTotalPrice = +prdPrice * +count;
    const CartObj = new Cart();
    CartObj.id = prditem;
    CartObj.name = prdName;
    CartObj.price = prdPrice;
    CartObj.count = count;
    CartObj.total = (CartObj.count?CartObj.count:0) * (CartObj.price?CartObj.price:0);
    this.OnTotalPriceChanges.emit(this.OrderTotalPrice);
    this.OnAddToCart.emit(CartObj);
  }
  prdTrackByFn(index:number , prd:IProduct):number{
    return prd.id;
  }
  openProductDetails(prdId:number){
    this.router.navigate(['/Products',prdId])
  }
}

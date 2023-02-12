import { AfterViewInit, Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Cart } from 'src/app/Models/cart';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { ProductListComponent } from '../Order/product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit,AfterViewInit ,OnChanges{
  catList :ICategory[];
  totalPriceFromItem:number =0;
  selectCateID :number =0;
  receviedOrderTotalPrice :number =0;
  OrderTotalPrice:number = 0;
  cartElement : Cart = new Cart();

  // @ViewChild('clientname') ClinetnameInp :ElementRef ={} as ElementRef;
  cartList:Cart[];
  //Non-null assertion operator
  @ViewChild('clientname') ClinetnameInp! :ElementRef ;
  @ViewChild(ProductListComponent) productcomObj! :ProductListComponent ;
  //@Input() OnAddToCart : EventEmitter<Cart>;


  constructor(private prdSerivce :ProductsService) { 
    this.catList=[
      {id:1 , name:"Laptops"},
      {id:2, name:"Tablet"},
      {id:3,name:"Mobile"}
    ]
    this.cartList =[];


  }
  ngOnChanges(changes: SimpleChanges): void {
    //this.CountTotalPrice();
  }
  ngAfterViewInit(): void {
    this.ClinetnameInp.nativeElement.style.background = "lightyellow"
    this.ClinetnameInp.nativeElement.value = "Test"
    
    this.productcomObj.prdCatList.pop() ;
  }

  ngOnInit(): void {
  }
  // UpdateTotalprice(totalPrice:number){
  //   this.receviedOrderTotalPrice = totalPrice;
  // }
  CountTotalPrice (){
    this.OrderTotalPrice = 0;
    this.cartList.forEach(element => {
      this.OrderTotalPrice += element.total!;
      return this.OrderTotalPrice;
    });
  }
  UpdateCartList(CartElement:Cart){
    this.cartList.push(CartElement);
    console.log(this.cartList);
    this.CountTotalPrice();
  }
  RemoveItem(i: number){
    this.cartList.splice(i,1);
    this.CountTotalPrice();
  }
  calcTotalForItem(id?:number,count?:any , item?:any){
    const cartResult =  this.cartList.find(cart=>cart.id == id);
   if( cartResult  != undefined){
      cartResult.total = +count * +item;
      this.CountTotalPrice();
   }
   // this.totalPriceFromItem = +count * +item;
  }
}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-porduct-details',
  templateUrl: './porduct-details.component.html',
  styleUrls: ['./porduct-details.component.scss']
})
export class PorductDetailsComponent implements OnInit {
  private currentPrdId:number=0;
  private prdsIDS :number[] =[];
  currentPrd:IProduct = {} as IProduct;
  constructor(
             private activitedRoute :ActivatedRoute,
             private productService : ProductsService,
             private router :Router,
             private location :Location ) { 

  }

  ngOnInit(): void {
    this.prdsIDS = this.productService.getProductsIds();
    // this.currentPrdId=Number( this.activitedRoute.snapshot.paramMap.get("pid"));
    // this.currentPrd = this.productService.getProductById(this.currentPrdId) as IProduct;

    this.activitedRoute.paramMap.subscribe((param)=>{
      this.currentPrdId = Number(param.get("pid"));
      this.currentPrd = this.productService.getProductById(this.currentPrdId) as IProduct;
    })
  }
  goBack(){
    this.location.back();
  }
  PreviousProduct(){
    let currIndex = this.prdsIDS.findIndex(val=>val==this.currentPrdId)
    if(currIndex != 0){
      this.currentPrdId = this.prdsIDS[currIndex-1];
      this.router.navigate(['/Products',this.currentPrdId])
    }
  }
  NextProduct(){
    let currIndex = this.prdsIDS.findIndex(val=>val==this.currentPrdId)
    if(currIndex <this.prdsIDS.length -1){
      this.currentPrdId = this.prdsIDS[currIndex+1];
      this.router.navigate(['/Products',this.currentPrdId])
    }
  }
  isFirstItem():boolean{
    return this.currentPrdId == this.prdsIDS[0]
  }
  isLastItem():boolean{
    return this.currentPrdId == this.prdsIDS[this.prdsIDS.length-1] 
  }
}

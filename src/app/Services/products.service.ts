import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private prodList: IProduct[];
  constructor() { 
    this.prodList = [
      {id:100,name:'Lenevo ThinqPad Laptop' , price:100000000,quantity:3,imageURL:'https://fakeimg.pl/200x100/',categoryId:1},
      {id:200,name:'HP Laptop' , price:6040505050,quantity:0,imageURL:'https://fakeimg.pl/200x100/',categoryId:1},
      {id:300,name:'DELL Laptop' , price:743500500,quantity:10,imageURL:'https://fakeimg.pl/200x100/',categoryId:2},
      {id:400,name:'MAC Book' , price:800000000,quantity:2,imageURL:'https://fakeimg.pl/200x100/',categoryId:2},
      {id:500,name:'Lenevo Tab2' , price:503030500,quantity:0,imageURL:'https://fakeimg.pl/200x100/',categoryId:3},
      {id:600,name:'MAC Tablet' , price:20400500,quantity:1,imageURL:'https://fakeimg.pl/200x100/',categoryId:3}
    ]
  }

  getAllProducts() :IProduct[]{
    return this.prodList;
  }
  getProductsByCatId(CatId:number): IProduct[]{
    console.log(CatId)
    if(CatId == 0){
      return this.prodList
    }
    else{
      return this.prodList.filter(prd => prd.categoryId == CatId);
    }
  }
  getProductById(Id:number):IProduct|undefined{
    return this.prodList.find(prd=>prd.id == Id);
  }
  addNewProduct(prd:IProduct):void{
    this.prodList.push(prd);
  }
  getProductsIds():number[]{
    return this.prodList.map(prd=>prd.id);
  }
}

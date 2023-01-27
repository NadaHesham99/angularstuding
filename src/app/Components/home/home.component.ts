import { Component, OnInit } from '@angular/core';
import { StoreInfo } from 'src/app/ViewModel/store-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storeData : StoreInfo;
  toggleImage :boolean = true;
  constructor() {
    this.storeData = new StoreInfo("ITI Store","https://picsum.photos/400/300",["Cairo","Alex","Geza"]) 
   }

  ngOnInit(): void {
  }
  toggleImageFun(){
    this.toggleImage = !this.toggleImage;
  }
}

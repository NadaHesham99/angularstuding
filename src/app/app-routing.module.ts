import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { PorductDetailsComponent } from './Components/porduct-details/porduct-details.component';

const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {path:'Products',component:ProductListComponent},
    {path:'Products/:pid',component:PorductDetailsComponent},
    {path:'Order',component:OrderMasterComponent},
  ]},
  //WALID CARD PATH
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

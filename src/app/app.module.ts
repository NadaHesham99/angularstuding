import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDtoEGYPipe } from './Pipes/usdto-egy.pipe';
import { OrderMasterComponent } from './Components/order-master/order-master.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    ProductListComponent,
    LightBoxDirective,
    USDtoEGYPipe,
    OrderMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

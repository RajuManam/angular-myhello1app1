import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path:'product', component:ProductComponent }
  ]) ],
  declarations: [ AppComponent, HelloComponent, ProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

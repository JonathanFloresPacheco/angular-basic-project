import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {WordpressService} from './services/wordpress.service'
import { HttpClientModule } from '@angular/common/http';
//MatToolbarModule, MatCardModule, MatButtonModule 
const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,materialModules
  ],
  exports:[materialModules],
  providers: [WordpressService],
  bootstrap: [AppComponent]
})
export class AppModule { }

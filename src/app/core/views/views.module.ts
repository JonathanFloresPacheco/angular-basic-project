import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';
import {MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
//MatToolbarModule, MatCardModule, MatButtonModule 
const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
];



@NgModule({
  declarations: 
  [
    HomeComponent
  ],
  imports: [
    CommonModule,   
    SharedModule,
    TemplatesModule,
    materialModules,
    HttpClientModule,
  ]
})
export class ViewsModule { }

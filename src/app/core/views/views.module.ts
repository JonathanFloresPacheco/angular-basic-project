import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';


@NgModule({
  declarations: 
  [
    HomeComponent
  ],
  imports: [
    CommonModule,   
    SharedModule,
    TemplatesModule,
  ]
})
export class ViewsModule { }

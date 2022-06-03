import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvengersRoutingModule } from './avengers-routing.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { AvengerComponent } from './pages/avenger/avenger.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    AvengerComponent,
    HomeComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AvengersRoutingModule
  ]
})
export class AvengersModule { }

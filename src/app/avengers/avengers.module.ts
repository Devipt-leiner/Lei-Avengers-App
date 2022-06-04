import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AvengersRoutingModule } from './avengers-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { AvengerComponent } from './pages/avenger/avenger.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';
import { AvengerCardComponent } from './components/avenger-card/avenger-card.component';
import { ImagenPipe } from './pipes/imagen.pipe';




@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    AvengerComponent,
    HomeComponent,
    ListComponent,
    EditComponent,
    AvengerCardComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    AvengersRoutingModule
  ]
})
export class AvengersModule { }

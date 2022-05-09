import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { TableroComponent } from './tablero/tablero.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    
    JugadoresComponent,
    TableroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    TableroComponent,
    JugadoresComponent
  ]
})
export class ComponentesModule { }

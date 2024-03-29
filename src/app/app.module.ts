import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentesModule } from './componentes/componentes.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ComponentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

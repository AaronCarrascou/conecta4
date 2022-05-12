import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'conecta4';
  nombre1:string = '';
  nombre2:string = '';
  jugador1:string = 'jugador 1';
  jugador2:string = 'jugador 2';
  gameOver:boolean = true;
  mensaje:string='';
  jugadorActual:string=this.jugador1;
  ganador='';
  

  tablero = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    ];


  ngOnInit(): void {
    
  }


}

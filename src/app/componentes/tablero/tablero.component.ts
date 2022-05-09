import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  constructor(public dataService:DataService) { }

  nombre1:string = '';
  nombre2:string = '';
  jugador1:string = 'jugador 1';
  jugador2:string = 'jugador 2';
  ganador:string="sin ganador";

  jugadorActual:string = this.jugador1;
  gameOver:boolean = false;
  mensaje:string='';
  inicio:boolean=true;

  ngOnInit(): void {
    
  }

  opciones = [1,2,3,4,5,6,7];

  tablero = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    ];

    colocarPieza(posicion: number):void {
      
      // this.mensaje=`turno de ${this.jugadorActual}`
      //Jugador 1
      if(this.jugadorActual==this.jugador1){
        this.mensaje=`turno de ${this.nombre2}`
        for(let f=5; f>=0; f--){
          if(this.tablero[f][posicion-1]==0){
            this.tablero[f][posicion-1]=1;
            this.jugadorActual=this.jugador2;
            this.buscarGanador();
            break;
          }
        }
      //Jugador 2
      }else{
        this.mensaje=`turno de ${this.nombre1}`
          for(let f=5; f>=0; f--){
            if(this.tablero[f][posicion-1]==0){
              this.tablero[f][posicion-1]=2;
              this.jugadorActual=this.jugador1;
              this.buscarGanador();
              break;
            }
        }
      }
    }

    
    buscarGanador():void{
      //Horizontal
      for(let f=0; f<6; f++){
        for(let c=0; c < 4; c++){
          if(this.tablero[f][c]!=0){
            if(this.tablero[f][c]== this.tablero[f][c+1] 
              && this.tablero[f][c+1] == this.tablero[f][c+2] 
              && this.tablero[f][c+2]== this.tablero[f][c+3]){
                this.asignarGanador();
                break;
            }
          }
        }
      }
      //vertical
      for(let c=0; c<7; c++){
        for(let f=0; f < 3; f++){
          if(this.tablero[f][c]!=0){
            if(this.tablero[f][c]== this.tablero[f+1][c] 
              && this.tablero[f+1][c] == this.tablero[f+2][c] 
              && this.tablero[f+2][c]== this.tablero[f+3][c]){
                this.asignarGanador();
                break;
            }
          }
        }
      }
      //diagonal hacia abajo
      for(let f=0; f<3; f++){
        for(let c=0; c < 4; c++){
          if(this.tablero[f][c]!=0){
            if(this.tablero[f][c]==this.tablero[f+1][c+1]
              && this.tablero[f+1][c+1]==this.tablero[f+2][c+2]
              && this.tablero[f+2][c+2]==this.tablero[f+3][c+3]){
                this.asignarGanador();
                break;
            }
          }
        }
      }
      //diagonal hacia arriba
      for(let f=3; f<6; f++){
        for(let c=0; c < 4; c++){
          if(this.tablero[f][c]!=0){
            if(this.tablero[f][c]==this.tablero[f-1][c+1]
              && this.tablero[f-1][c+1]==this.tablero[f-2][c+2]
              && this.tablero[f-2][c+2]==this.tablero[f-3][c+3]){
                this.asignarGanador();
                break;
            }
          }
        }
      }
    }

    asignarGanador():void{
      if(this.jugadorActual==this.jugador1){
        this.ganador=this.nombre2;
        this.mensaje=`${this.nombre2} ganaste esta partida`;
        this.gameOver=true;
      }else{
        this.ganador=this.nombre1;
        this.mensaje=`${this.nombre1} ganaste esta partida`;
        this.gameOver=true;
      }
      
    }

}

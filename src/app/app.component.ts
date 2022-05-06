import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'conecta4';
  jugador1:string = 'jugador 1';
  jugador2:string = 'jugador 2';
  ganador:string="sin ganador";

  jugadorActual:string = this.jugador1;
  gameOver:boolean = false;



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

      //Jugador 1
      if(this.jugadorActual==this.jugador1){
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
            if(this.tablero[f][c]== this.tablero[f][c+1] && this.tablero[f][c+1] == this.tablero[f][c+2] 
              && this.tablero[f][c+2]== this.tablero[f][c+3]){
                
                if(this.jugadorActual==this.jugador1){
                  this.ganador=this.jugador2;
                }else{
                  this.ganador=this.jugador1;
                }
                break;

            }
          }
        }
      }
      //vertical
      
    }
}

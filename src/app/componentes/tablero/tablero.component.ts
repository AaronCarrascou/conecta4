import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {


  @Output() cambiaMensaje: EventEmitter<string>= new EventEmitter<string>();
  
  @Input() nombre1:string = '';
  @Input() nombre2:string = '';
  jugador1:string = 'jugador 1';
  jugador2:string = 'jugador 2';
  ganador:string="sin ganador";

  jugadorActual:string = this.jugador1;
  @Input() gameOver:boolean = true;
  mensaje:string='';
  

  ngOnInit(): void {
    
  }

  opciones = [1,2,3,4,5,6,7];

  @Input() tablero = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    ];

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
      this.cambiaMensaje.emit(this.mensaje);
      
    }

    colocarPieza(posicion: number):void {
      
      //Jugador 1
      if(this.jugadorActual==this.jugador1){
        this.mensaje=`turno de ${this.nombre2}`
        for(let f=5; f>=0; f--){
          if(this.tablero[f][posicion-1]==0){
            this.tablero[f][posicion-1]=1;
            this.jugadorActual=this.jugador2;
            this.buscarGanador();
            this.cambiaMensaje.emit(this.mensaje);
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
              this.cambiaMensaje.emit(this.mensaje);
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
                
                if(this.jugadorActual==this.jugador1){
                  this.tablero[f][c]=4;
                  this.tablero[f][c+1]=4;
                  this.tablero[f][c+2]=4;
                  this.tablero[f][c+3]=4;
                  
                }else{
                  this.tablero[f][c]=3;
                  this.tablero[f][c+1]=3;
                  this.tablero[f][c+2]=3;
                  this.tablero[f][c+3]=3;
                }

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

                if(this.jugadorActual==this.jugador1){
                  this.tablero[f][c]=4;
                  this.tablero[f+1][c]=4;
                  this.tablero[f+2][c]=4;
                  this.tablero[f+3][c]=4;
                  
                }else{
                  this.tablero[f][c]=3;
                  this.tablero[f+1][c]=3;
                  this.tablero[f+2][c]=3;
                  this.tablero[f+3][c]=3;
                }

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

                if(this.jugadorActual==this.jugador1){
                  this.tablero[f][c]=4;
                  this.tablero[f+1][c+1]=4;
                  this.tablero[f+2][c+2]=4;
                  this.tablero[f+3][c+3]=4;
                  
                }else{
                  this.tablero[f][c]=3;
                  this.tablero[f+1][c+1]=3;
                  this.tablero[f+2][c+2]=3;
                  this.tablero[f+3][c+3]=3;
                }

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

                if(this.jugadorActual==this.jugador1){
                  this.tablero[f][c]=4;
                  this.tablero[f-1][c+1]=4;
                  this.tablero[f-2][c+2]=4;
                  this.tablero[f-3][c+3]=4;
                  
                }else{
                  this.tablero[f][c]=3;
                  this.tablero[f-1][c+1]=3;
                  this.tablero[f-2][c+2]=3;
                  this.tablero[f-3][c+3]=3;
                }

                this.asignarGanador();
                break;
            }
          }
        }
      }
    }



}

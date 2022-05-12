import { Component, OnInit, Output,Input, EventEmitter  } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {


  ngOnInit(): void { 
  }

  @Output() asignarNombre1: EventEmitter<string>= new EventEmitter<string>();
  @Output() asignarNombre2: EventEmitter<string>= new EventEmitter<string>();
  @Output() limpiarTablero: EventEmitter<number[][]>= new EventEmitter<number[][]>();
  @Output() cambiaGameOver: EventEmitter<boolean>= new EventEmitter<boolean>();
  @Output() cambiaMensaje: EventEmitter<string>= new EventEmitter<string>();
  @Output() muestraGanador: EventEmitter<string>= new EventEmitter<string>();


  nombre1 :string = '';
  nombre2 :string = '';
  jugador1:string = 'jugador 1';
  jugador2:string = 'jugador 2';

  @Input() ganador:string='';
  @Input() jugadorActual:string = this.jugador1;
  gameOver:boolean = true;
  @Input() mensaje:string='';
  inicio:boolean=true;


  tablero = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    ];


    nuevoJuego(){
        this.gameOver=true
        this.inicio=true;
        this.mensaje='';
        this.ganador=''
        this.tablero=[
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          ];
        this.muestraGanador.emit(this.ganador)
        this.cambiaMensaje.emit(this.mensaje);
        this.cambiaGameOver.emit(this.gameOver);
        this.limpiarTablero.emit(this.tablero);
      }
      
      comenzarJuego(){
        
        if(this.nombre1=='' || this.nombre2==''){
          this.mensaje='inserte nombre de los jugadores';
          this.gameOver=true;
        }else{
          if(this.jugadorActual==this.jugador1){
            this.mensaje=`turno de ${this.nombre1}`
          }else{
            this.mensaje=`turno de ${this.nombre2}`
          }
        this.gameOver=false;
        this.inicio=false;

        this.asignarNombre1.emit(this.nombre1);
        this.asignarNombre2.emit(this.nombre2);
        this.cambiaGameOver.emit(this.gameOver);
        
      }
    }

}

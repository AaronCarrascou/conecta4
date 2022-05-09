import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  constructor(public dataService: DataService){}

  ngOnInit(): void {
    this.dataService.nombre1Observable.subscribe(res => {
      this.nombre1 = res;
    });
  }

  nombre1 :string = '';
  nombre2 :string = '';
  jugador1:string = 'jugador 1';
  jugador2:string = 'jugador 2';
  ganador:string="sin ganador";
  men:string='';

  jugadorActual:string = this.jugador1;
  gameOver:boolean = false;
  mensaje:string='';
  inicio:boolean=true;


  
  opciones = [1,2,3,4,5,6,7];

  tablero = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    ];


    nuevoJuego(){
      this.tablero = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        ];
        this.gameOver=true
        this.inicio=true;
        this.mensaje=''
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
      }
    }

}

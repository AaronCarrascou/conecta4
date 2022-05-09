import { Injectable, Output,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  nombre1:string="";
  nombre2:string="";
  private enviarNombre1Subject= new Subject<string>();
  nombre1Observable=this.enviarNombre1Subject.asObservable();

  private enviarNombre2Subject= new Subject<string>();
  nombre2Observable=this.enviarNombre2Subject.asObservable();
  
  enviarNombre1(nombre1:string){
    this.nombre1=nombre1;
    this.enviarNombre1Subject.next(nombre1);

  }

  enviarNombre2(nombre1:string){
    this.nombre1=nombre1;
    this.enviarNombre1Subject.next(nombre1);

  }
}

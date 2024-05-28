import { TestBed } from '@angular/core/testing';
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IVariable, Variable } from './Sentencia';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn:'root'
})
export class CrudService{
  API: string='http://localhost:80/public/variables/';
  private clienteHttp=inject(HttpClient);
  httpOptions={ headers: new HttpHeaders({ 'Content-Type':'aplication/json' }) };

  constructor(){}

    Agregar(datosVariable:Variable){
      return this.clienteHttp.post(this.API+"create/", datosVariable);
      
    }
    Obtener(){
      return this.clienteHttp.get<Variable[]>(this.API);
    }

    Eliminar(id:number){
      return this.clienteHttp.delete(this.API+"delete/"+id);
    }

    ObtenerVariable(id:number){
      return this.clienteHttp.get<Variable>(this.API+"buscar/"+id);
    }

    Editar(id:number,datosVariable:Variable){
      return this.clienteHttp.patch(this.API+"update/"+id, datosVariable);
      
    }

}
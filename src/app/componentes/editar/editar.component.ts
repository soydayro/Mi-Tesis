import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from '../../servicio/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent  implements OnInit{
  formularioDeVariable: FormGroup;
  elId:any;
  Variables: any[]=[];

  constructor(
  private activeRoute:ActivatedRoute,
  private crudService: CrudService,
  public formulario: FormBuilder,
  private ruteador:Router
  ){
    this.elId=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elId);
;
    this.formularioDeVariable=this.formulario.group({
      nombreVariable: ['', Validators.required],
      indicador: ['', Validators.required],
      evaluacion: ['', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]], // Solo números enteros y decimales
      sentencia: ['', Validators.required],
      impacto: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Solo números
      dificultad: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Solo números
    })
  }

  ngOnInit(): void {
      this.cargarDatos();
  }
 
  cargarDatos() {
    this.crudService.ObtenerVariable(this.elId).subscribe(
      respuesta => {
        console.log(respuesta);
        this.formularioDeVariable.patchValue(respuesta);
      },
    );
  }

  enviarDatosEditados(){
    console.log(this.elId);
    console.log(this.formularioDeVariable.value);
    this.crudService.Editar(this.elId,this.formularioDeVariable.value).subscribe(()=>{

      this.ruteador.navigateByUrl('/listar');
    });    
  }
   
  volver(){
    this.ruteador.navigateByUrl('/listar');
  }
}

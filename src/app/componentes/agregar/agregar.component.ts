import { Component, OnInit, inject } from '@angular/core';
import { FormGroup,FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../../servicio/crud.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule ],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent implements OnInit{

  public fb=inject(FormBuilder);
  private crudService= inject(CrudService);

  public formularioDeVariable:FormGroup=this.fb.group(
    {
      nombreVariable: ['', Validators.required],
      indicador: ['', Validators.required],
      evaluacion: ['', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]], // Solo números enteros y decimales
      sentencia: ['', Validators.required],
      impacto: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Solo números
      dificultad: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Solo números
    }
  )

  constructor(
    private ruteador:Router){}

  ngOnInit(): void {
    
  }

  enviarDatos() {
    if (this.formularioDeVariable.valid) {
      console.log("Me Presionaste");
      console.log(this.formularioDeVariable.value);
      this.crudService.Agregar(this.formularioDeVariable.value).subscribe(() => {
        this.ruteador.navigateByUrl('/listar'); // Uso correcto de this.router
      }, error => {
        console.error(error); // Manejo de errores opcional
      });
    } else {
      console.error("El formulario no es válido"); // Mensaje de error si el formulario no es válido
    }
  }
   
  volver(){
    this.ruteador.navigateByUrl('/listar');
  }
  
}

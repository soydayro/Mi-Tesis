import { Component, OnInit, inject} from '@angular/core';
import { CrudService } from '../../servicio/crud.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  Variables: any[]=[];
  private crudService=inject(CrudService);
  constructor(private ruteador:Router){
  }

  ngOnInit(): void {
    this.crudService.Obtener().subscribe(respuesta=>{
      console.log(respuesta)
      this.Variables=respuesta;
    })
  }

borrarRegistro(id:number,iContrl:any){
    console.log(id);
    console.log(iContrl);
    if(window.confirm("¿Desea Eliminar el registro?")){
    this.crudService.Eliminar(id).subscribe((respuesta)=>{
      console.log(respuesta)
      this.Variables.splice(iContrl,1);

      
    }
  );
  }
  this.ruteador.navigateByUrl('/listar');
}

}



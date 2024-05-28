import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import path from 'path';
import { VariablesComponent } from './Pagina-tabla/variables/variables.component';

import { AgregarComponent} from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { TableProductsDemo } from './tabla/tabla-componente/tabla-componente.component';


export const routes: Routes = [
    //{path:'',pathMatch:'full',redirectTo:'tabla-componente'},
    {path:'',pathMatch:'full',redirectTo:'listar'},
    {path:'agregar',component: AgregarComponent},
    {path:'editar/:id',component: EditarComponent},
    {path:'listar',component: ListarComponent},
    //{path:'tabla-componente',component: TableProductsDemo},
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

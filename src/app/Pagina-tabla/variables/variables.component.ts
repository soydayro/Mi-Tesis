import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
 selector: 'app-variables',
 standalone: true,
 imports: [TableModule, DialogModule, ToolbarModule],
 templateUrl: './variables.component.html',
 styleUrls: ['./variables.component.css'],
 schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VariablesComponent {
    variables: any[] = [{
        id: '1',
        nombreVariable: 'Titulo',
        indicador: 'Evaluacion general',
        evaluacion:'0',
        sentencia:'Debe mejorar su titulo',
        impacto:'0,5',
        dificultad:'0'
      },{
        id: '9',
        nombreVariable: 'Titulo',
        indicador: 'Evaluacion general',
        evaluacion:'0,5',
        sentencia:'Su titulo puede mejorar',
        impacto:'0',
        dificultad:'0'
      },{
        id: '4',
        nombreVariable: 'TURL',
        indicador: 'Evaluacion general',
        evaluacion:'0',
        sentencia:'El sitio redreccion mucho',
        impacto:'0,5',
        dificultad:'1'
      },{
        id: '6',
        nombreVariable: 'Titulo',
        indicador: 'Longitud',
        evaluacion:'0',
        sentencia:'Debe acortar mas el titulo',
        impacto:'0',
        dificultad:'0'
      },{
        id: '2',
        nombreVariable: 'Rapidez',
        indicador: 'Evaluacion parcial',
        evaluacion:'0.5',
        sentencia:'El tiempo de respuesta del sistema puede mejorar',
        impacto:'0,5',
        dificultad:'0.5'
      },{
        id: '7',
        nombreVariable: 'Titulo',
        indicador: 'Evaluacion general',
        evaluacion:'0',
        sentencia:'Debe mejorar su titulo',
        impacto:'0,5',
        dificultad:'0'
      },{
        id: '3',
        nombreVariable: 'Titulo',
        indicador: 'Evaluacion general',
        evaluacion:'0',
        sentencia:'Debe mejorar su titulo',
        impacto:'0,5',
        dificultad:'0'
      },{
        id: '4',
        nombreVariable: 'Titulo',
        indicador: 'Evaluacion general',
        evaluacion:'0',
        sentencia:'Debe mejorar su titulo',
        impacto:'0,5',
        dificultad:'0'
      },{
        id: '5',
        nombreVariable: 'Titulo',
        indicador: 'Evaluacion general',
        evaluacion:'0',
        sentencia:'Debe mejorar su titulo',
        impacto:'0,5',
        dificultad:'0'
      },{
        id: '8',
        nombreVariable: 'Nombre',
        indicador: 'General',
        evaluacion:'0.5',
        sentencia:'Debe mejorar su nombre',
        impacto:'0,5',
        dificultad:'1'
    },{
      id: '10',
      nombreVariable: 'Titulo',
      indicador: 'Evaluacion general',
      evaluacion:'0,5',
      sentencia:'Su titulo puede mejorar',
      impacto:'0',
      dificultad:'0'
    },{
      id: '11',
      nombreVariable: 'Titulo',
      indicador: 'Evaluacion general',
      evaluacion:'0,5',
      sentencia:'Su titulo puede mejorar',
      impacto:'0',
      dificultad:'0'
    },{
      id: '12',
      nombreVariable: 'Titulo',
      indicador: 'Evaluacion general',
      evaluacion:'0,5',
      sentencia:'Su titulo puede mejorar',
      impacto:'0',
      dificultad:'0'
    },{
      id: '13',
      nombreVariable: 'Titulo',
      indicador: 'Evaluacion general',
      evaluacion:'0,5',
      sentencia:'Su titulo puede mejorar',
      impacto:'0',
      dificultad:'0'
    },{
      id: '14',
      nombreVariable: 'Titulo',
      indicador: 'Evaluacion general',
      evaluacion:'0,5',
      sentencia:'Su titulo puede mejorar',
      impacto:'0',
      dificultad:'0'
    }
    ];

    selectedVariables: any[] = [];
    variableDialog: boolean = false;

openNew(): void {
    this.variableDialog = true;
}

    product: any; // Este objeto se usará para manejar la variable seleccionada en el diálogo
    dt: any;

    constructor() { }

    ngOnInit(): void {
        // Aquí puedes cargar tus variables desde un servicio o inicializarlas directamente
    }

    deleteSelectedVariables(): void {
        // Implementa la lógica para eliminar las variables seleccionadas
    }

    editVariable(variable: any): void {
        this.product = { ...variable }; // Copia la variable seleccionada para editar
        this.variableDialog = true;
    }

    deleteVariable(variable: any): void {
        const index = this.variables.findIndex(v => v.id === variable.id);
        if (index !== -1) {
            this.variables.splice(index, 1);
    }
    
    }

    hideDialog(): void {
        this.variableDialog = false;
    }


    onInput(event: Event): void {
      const inputElement = event.target as HTMLInputElement;
      this.dt.filterGlobal(inputElement.value, 'contains');
    }

    saveVariable(): void {
      if (this.product.id) {
          // Si el producto ya tiene un id, es una edición, no una adición
          const index = this.variables.findIndex(v => v.id === this.product.id);
          if (index !== -1) {
              this.variables[index] = this.product;
          }
      } else {
          // Si no tiene id, es una nueva variable, añadirla al array
          this.product.id = (this.variables.length + 1).toString(); // Asigna un nuevo id
          this.variables.push(this.product);
      }
      this.variableDialog = false;
  }
}


export class Variable {
    id?: string;
    nombreVariable?: string;
    indicador?: string;
    evaluacion?: string;
    sentencia?: string;
    impacto?: number;
    dificultad?: number;
    }



export interface IVariable{
    id?: number;
    nombreVariable:string;
    indicador:string;
    evaluacion:number;
    sentencia:string;
    impacto:number;
    dificultad:number;
}
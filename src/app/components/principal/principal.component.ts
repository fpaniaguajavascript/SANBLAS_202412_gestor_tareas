import { Component } from '@angular/core';
import { FichaTareaComponent } from "../ficha-tarea/ficha-tarea.component";
import { FormsModule } from '@angular/forms';//Para [(ngModel)]
import { CommonModule } from '@angular/common';// Para el pipe json
import { Tarea } from '../../classes/tarea';
import { CreditosComponent } from "../creditos/creditos.component";

@Component({
  selector: 'app-principal',
  standalone: true,
  //FormsModule para [(ngModel)]; CommonModule para el pipe json
  imports: [FichaTareaComponent, FormsModule, CommonModule, CreditosComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  nombreTarea : string = "";
  criticidad : string = "Baja";
  tareas : Array<Tarea> = new Array();

  crear() {
    console.log("Creando tarea...");
    let nuevaTarea = new Tarea(this.nombreTarea, this.criticidad);
    this.tareas.push(nuevaTarea);
    this.nombreTarea = "";
    this.criticidad = "Baja";
  }
}

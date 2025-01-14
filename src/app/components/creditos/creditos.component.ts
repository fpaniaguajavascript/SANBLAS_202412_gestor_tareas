import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-creditos',
  standalone: true,
  imports: [],
  templateUrl: './creditos.component.html',
  styleUrl: './creditos.component.css'
})
export class CreditosComponent {
  @Input() nombre : string = "";
  @Input() anyo : string = "";
}

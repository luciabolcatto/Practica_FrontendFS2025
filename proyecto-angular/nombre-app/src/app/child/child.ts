import { Component, EventEmitter, Input, Output } from '@angular/core'; //PRIMERA LATRA MAYUSCULA

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() message: string = 'hola';
  @Output() childclick = new EventEmitter<string>();

  onClick() {
    //metodo llamado desde el html
    this.childclick.emit('hola desde el componente hijo');
  }
}

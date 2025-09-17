import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  handleChilClick(event: string) {
    console.log('mensaje  recibido del hijo', event);
  }
  protected readonly title = signal('nombre-app');
}

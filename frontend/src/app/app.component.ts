import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet
    // Não precisa importar TabelaPessoasComponent aqui!
  ],
})
export class AppComponent {}

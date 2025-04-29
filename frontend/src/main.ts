import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter, withHashLocation } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importando FormsModule para ngModel
import { TabelaPessoasComponent } from './app/components/tabela-pessoas/tabela-pessoas.component';  // Componente standalone
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router'; // Importe o RouterModule
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 


const routes: Routes = [
  { path: '', redirectTo: '/tabela-pessoas', pathMatch: 'full' },
  { path: 'tabela-pessoas', component: TabelaPessoasComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()), 
    provideHttpClient(),
    importProvidersFrom(
      FormsModule, // Importação do FormsModule
      RouterModule, // Importação do RouterModule
    ),
    provideAnimationsAsync(), 
  ],
}).catch((err) => console.error(err));

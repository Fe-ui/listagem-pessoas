import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationRef } from '@angular/core';
import { AppComponent } from './app/app.component';  // Componente principal (AppComponent)

const bootstrap = async (): Promise<ApplicationRef> => {
  const appRef = await bootstrapApplication(AppComponent, {
    providers: [
      // Não é necessário importar o TabelaPessoasComponent aqui, pois as rotas já fazem isso
    ]
  });
  return appRef;
};

export default bootstrap;

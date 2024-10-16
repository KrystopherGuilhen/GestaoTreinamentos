import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProfessorComponent } from './cadastro-professor.component';

const routes: Routes = [
  { path: '', component: CadastroProfessorComponent } // Componente principal na rota raiz
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroProfessorRoutingModule { }
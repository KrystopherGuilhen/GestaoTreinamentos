import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CadastroProfessorOldComponent } from './cadastroProfessorOld.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: CadastroProfessorOldComponent }
	])],
	exports: [RouterModule]
})
export class CadastroProfessorOldRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastroProfessorOldComponent } from './cadastroProfessorOld.component';
import { CadastroProfessorOldRoutingModule } from './cadastroProfessorOld-routing.module';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from 'primeng/table';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		CadastroProfessorOldRoutingModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule,
		TableModule 
		
	],
	declarations: [CadastroProfessorOldComponent]
})
export class CadastroProfessorOldModule { }

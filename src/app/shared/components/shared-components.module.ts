import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SesiToolbarComponent } from './sesi-toolbar/sesi-toolbar.component';
import { SesiModalComponent } from './sesi-modal/sesi-modal.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SesiTabelasComponent } from './sesi-tabelas/sesi-tabelas.component';
import { TableModule } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { MesNomePipe } from '../pipes/mes-nome.pipe';
import { CommonModule } from '@angular/common';
import { ContextMenuModule } from 'primeng/contextmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    SplitButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    RadioButtonModule,
    FileUploadModule,
    ContextMenuModule,
    OverlayPanelModule,
    MultiSelectModule,
    ListboxModule,
    BadgeModule
  ],
  declarations: [
    SesiToolbarComponent,
    SesiTabelasComponent,
    SesiModalComponent,
    MesNomePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    SplitButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    RadioButtonModule,
    FileUploadModule,
    ContextMenuModule,
    OverlayPanelModule,
    MultiSelectModule,
    ListboxModule,
    BadgeModule,
    MesNomePipe,
    SesiToolbarComponent,
    SesiTabelasComponent,
    SesiModalComponent,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    MesNomePipe
  ]
})
export class SharedComponentsModule { }

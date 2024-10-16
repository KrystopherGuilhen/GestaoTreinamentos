import { NgModule, LOCALE_ID } from '@angular/core';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import localePt from '@angular/common/locales/pt';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { CadastroProfessorFiltroComponent } from './cadastor-professor-filtro/cadastro-professor-filtro.component';
import { CadastroProfessorCadastroComponent } from './cadastro-professor-cadastro/cadastro-professor-cadastro.component';
import { CadastroProfessorViewComponent } from './cadastro-professor-view/cadastro-professor-view.component';
import { CadastroProfessorComponent } from './cadastro-professor.component';
import { CadastroProfessorRoutingModule } from './cadastro-professor-routing.module';

registerLocaleData(localePt);

@NgModule({
  imports: [
    SharedComponentsModule,
    CadastroProfessorRoutingModule
  ],
  declarations: [
    CadastroProfessorComponent,
    CadastroProfessorViewComponent,
    CadastroProfessorFiltroComponent,
    CadastroProfessorCadastroComponent
  ],
  exports: [
    CadastroProfessorComponent,
    CadastroProfessorViewComponent,
    CadastroProfessorFiltroComponent,
    CadastroProfessorCadastroComponent
  ],
  providers: [
    MessageService,
    ConfirmationService,
    DecimalPipe,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CadastroProfessorModule { }

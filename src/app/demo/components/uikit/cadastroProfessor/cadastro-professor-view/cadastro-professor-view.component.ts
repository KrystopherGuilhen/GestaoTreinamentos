import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DecimalPipe } from '@angular/common';
import {
    ITabela,
    IColunas,
    IBtnAcoesCustom,
} from 'src/app/model/components/sesi-tabelas';
import { IToolbar } from 'src/app/model/components/sesi-toolbar';
import { ICadastroProfessor } from 'src/app/model/cadastro-professor';
import { MesNomePipe } from 'src/app/shared/pipes/mes-nome.pipe';
import { ControleService } from 'src/app/shared/services/controle.service';
import { ExportersService } from 'src/app/shared/services/exporters.service';
import { CrudViewAbstractComponent } from 'src/app/shared/templates/crud-view-template.abstract';

@Component({
    selector: 'sesi-cadastro-professor-view',
    templateUrl: '../../../../../shared/templates/crud-view-template.html',
    styleUrls: ['./cadastro-professor-view.component.scss'],
})
export class CadastroProfessorViewComponent extends CrudViewAbstractComponent {
    toolbarProps: IToolbar = {
        minimalista: true,
        btnSombreado: true,
        btnCircular: true,
        apenasXlsx: false,
        tabelaCrud: true,
    };
    tabelaProps: ITabela = {
        nomeTabela: 'registro-cadastro-professor',
        dados: [],
        colunas: [],
        colunasCustom: true,
        acoes: true,
        campoOrdenacao: '',
        carregando: false,
        grouping: false,
        acoesCustom: false,
        camposAgrupar: [],
    };
    filtrosGlobais: string[] = [
        'nome_professor',
        'endereco',
        'cidade',
        'estado',
        'telefone',
        'cpf',
        'email',
        'numero_registro_profissional',
        'unidade_registro_profissinal',
        'estado_registro_profissional',
    ];

    constructor(
        public override requestService: ControleService,
        public override messageService: MessageService,
        public override confirmationService: ConfirmationService,
        public override exporters: ExportersService,
        private number: DecimalPipe,
        private mes: MesNomePipe
    ) {
        super(requestService, messageService, confirmationService, exporters);
    }

    protected constroiColunasDinamicas(colunas: IColunas[]): IColunas[] {
        return (colunas = [
            {
                field: 'nome_professor',
                header: 'Professor',
                width: 'auto',
                alignment: 'text-left',
                grouped: false,
            },
            {
                field: 'endereco',
                header: 'Endereço',
                width: 'auto',
                alignment: 'text-left',
                grouped: false,
            },
            {
                field: 'cidade',
                header: 'Cidade',
                width: 'auto',
                alignment: 'text-left',
                grouped: false,
            },
            {
                field: 'estado',
                header: 'Estado',
                width: 'auto',
                alignment: 'text-left',
                grouped: false,
            },
            {
                field: 'telefone',
                header: 'Telefone',
                width: 'auto',
                alignment: 'text-left',
                grouped: false,
            },
            {
                field: 'cpf',
                header: 'CPF',
                width: 'auto',
                alignment: 'text-left',
                grouped: false,
            },
            {
                field: 'email',
                header: 'Email',
                width: 'auto',
                alignment: 'text-left',
                grouped: false,
            },
            {
                field: 'numero_registro_profissional',
                header: 'Número de registro profissional',
                width: 'auto',
                alignment: 'text-left',
                grouped: false,
            },
            {
                field: 'unidade_registro_profissinal',
                header: 'Unidade de registro profissional',
                width: 'auto',
                alignment: 'text-left',
                grouped: false,
            },
            {
                field: 'estado_registro_profissional',
                header: 'Estado de registro do profissional',
                width: 'auto',
                alignment: 'text-left',
                grouped: false,
            },
        ]);
    }

    protected trataFiltrosGlobais(value: string): any {
        const meses: string[] = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ];
        const mesIndex = meses.indexOf(value);

        if (mesIndex !== -1) {
            value = (mesIndex + 1).toString();
        }

        return value;
    }

    protected constroiColunaAcaoCustom(
        botoes: IBtnAcoesCustom[]
    ): IBtnAcoesCustom[] {
        return (botoes = [
            {
                icon: 'pi pi-eye-slash',
                tooltip: 'Exibir',
                btnText: true,
                btnCirculo: true,
                btnSombreado: false,
                btnCor: 'primary',
                class: 'p-button-sm',
                evento: (data) => this.acaoVisivel(data),
            },
        ]);
    }

    protected capturaDescricaoRegistroRemocao(
        rowData: ICadastroProfessor
    ): string {
        return rowData.nome_professor;
    }

    private acaoVisivel(rowData: ICadastroProfessor): void {
        !rowData.hasOwnProperty('icon')
            ? (rowData['icon'] = 'pi pi-eye-slash')
            : null;
        rowData['icon'] =
            rowData['icon'] === 'pi pi-eye-slash'
                ? 'pi pi-eye'
                : 'pi pi-eye-slash';
    }
}

import { Component, Input } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { IForms } from 'src/app/model/components/sesi-forms';
import { IModal } from 'src/app/model/components/sesi-modal';
import { ITabela } from 'src/app/model/components/sesi-tabelas';
import {
    ICadastroProfessorsListas,
    ICadastroProfessor,
} from 'src/app/model/cadastro-professor';
import { ControleService } from 'src/app/shared/services/controle.service';
import { CrudFormsAbstractComponent } from 'src/app/shared/templates/crud-forms-template.abstract';
import { FuncoesUtils } from 'src/app/shared/utils/funcoes-utils';

@Component({
    selector: 'sesi-cadastro-professor-filtro',
    templateUrl: '../../../../../shared/templates/crud-forms-template.html',
    styleUrls: ['./cadastro-professor-filtro.component.scss'],
})
export class CadastroProfessorFiltroComponent extends CrudFormsAbstractComponent {
    modalProps: IModal = {
        titulo: 'Definir Filtros',
        exibeModal: false,
        largura: '800px',
        modalCadastro: false,
        fileUpload: false,
    };
    formFiltros: IForms[] = [];
    listas: ICadastroProfessorsListas = {
        dealers: [],
        categoriaVenda: [],
        ano: [],
    };
    formCadastro: IForms[];
    @Input() tabelaProps: ITabela;
    @Input() cadastro: ICadastroProfessor;
    @Input() filtros: ICadastroProfessor;

    constructor(
        requestService: ControleService,
        messageService: MessageService,
        confirmationService: ConfirmationService
    ) {
        super(requestService, messageService, confirmationService);
    }

    protected constroiListas(): void {
        this.requestService.getDados('dealers').subscribe({
            next: (res) =>
                res.filtros.forEach((dealer) =>
                    this.listas.dealers.push({
                        label: dealer.descricao,
                        value: dealer.id,
                    })
                ),
        });

        this.requestService.getDados('categoria-venda').subscribe({
            next: (res) =>
                res.filtros.forEach((venda) =>
                    this.listas.categoriaVenda.push({
                        label: venda.descricao,
                        value: venda.id,
                    })
                ),
        });

        for (let i = 0; i <= 30; i++) {
            this.listas.ano.push({
                label: `20${i < 10 ? '0' + i : i}`,
                value: 2000 + i,
            });
        }
    }

    protected constroiFormulario(): void {
        this.formFiltros = [
            {
                colSpan: 6,
                formModel: 'nome_professor',
                descricao: 'Dealers',
                tipoDado: 'lista',
                optInput: {
                    lista: this.listas.dealers,
                    listaLabel: 'label',
                    listaValue: 'value',
                    placeholder: 'Selecione um professor...',
                },
            },
            {
                colSpan: 6,
                formModel: 'id_categoria_venda',
                descricao: 'Previsão Venda',
                tipoDado: 'lista',
                optInput: {
                    lista: this.listas.categoriaVenda,
                    listaLabel: 'label',
                    listaValue: 'value',
                    placeholder: 'Selecione uma categoria...',
                },
            },
            {
                colSpan: 6,
                formModel: 'anoNumber',
                descricao: 'Ano',
                tipoDado: 'lista',
                optInput: {
                    lista: this.listas.ano,
                    listaLabel: 'label',
                    listaValue: 'value',
                    placeholder: 'Selecione o ano...',
                },
            },
            {
                colSpan: 6,
                formModel: 'mesDate',
                descricao: 'Mês',
                tipoDado: 'data',
                optInput: {
                    dateFormat: 'MM',
                    tipoData: 'month',
                },
            },
        ];
    }

    protected tratarCampos(): void {
        // const mes = this.filtros.mesDate.getMonth() + 1;

        // this.filtros.ano = this.filtros.anoNumber.toString();
        // this.filtros.mes = mes.toString();

        // delete this.filtros.anoNumber;
        // delete this.filtros.mesDate;
    }

    protected limparFormulario(): void {
        this.filtros = {
            nome_professor: '',
            endereco: '',
            cidade: '',
            estado: '',
            telefone: '',
            cpf: '',
            email: '',
            numero_registro_profissional: 0,
            unidade_registro_profissinal: '',
            estado_registro_profissional: '',
            // mesDate: FuncoesUtils.conversaoMesAtual(),
            // anoNumber: FuncoesUtils.conversaoAnoAtual(),
        };
    }
}

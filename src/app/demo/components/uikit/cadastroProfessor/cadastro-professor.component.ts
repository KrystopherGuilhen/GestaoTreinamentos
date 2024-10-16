import { Component, OnInit } from '@angular/core';
import { IModal } from 'src/app/model/components/sesi-modal';
import { ICadastroProfessor } from 'src/app/model/cadastro-professor';
// import { ICadastroProfessor } from 'src/app/model/cadastro-professor';
import { FuncoesUtils } from 'src/app/shared/utils/funcoes-utils';

@Component({
    selector: 'sesi-cadastro-professor',
    templateUrl: './cadastro-professor.component.html',
    styleUrls: ['./cadastro-professor.component.scss'],
})
export class CadastroProfessorComponent implements OnInit {
    cadastro: ICadastroProfessor = {
        todosDealers: false,
        preencherArquivo: false,
        id_dealer: '',
        id_categoria_venda: '',
        ano: null,
        anoNumber: FuncoesUtils.conversaoAnoAtual(),
        mes: null,
        mesDate: FuncoesUtils.conversaoMesAtual(),
        tipo_valor: 'S',
        valor: 0,
    };
    filtros: ICadastroProfessor = {
        id_dealer: '',
        id_categoria_venda: '',
        ano: '',
        mes: '',
        mesDate: FuncoesUtils.conversaoMesAtual(),
        anoNumber: FuncoesUtils.conversaoAnoAtual(),
    };
    exibeCadastro: boolean = false;
    exibeFiltros: boolean = false;

    constructor() {}

    ngOnInit(): void {
        console.log('passo aqui jovem');
    }

    public recebeModalFiltros(modalProps: IModal): void {
        modalProps.modalCadastro = false;
        modalProps.exibeModal = !modalProps.exibeModal;
    }

    public recebeModalCadastro(modalProps: IModal): void {
        modalProps.modalCadastro = true;
        modalProps.exibeModal = !modalProps.exibeModal;
    }

    public recebeDadosCadastro(cadastro: ICadastroProfessor): void {
        this.cadastro = cadastro;
        this.cadastro.mesDate = this.converteMesTipoDate(this.cadastro.mes);
        this.cadastro.anoNumber = Number(this.cadastro.ano);
    }

    public recebeCancelarCadastro(cadastro: ICadastroProfessor): void {
        cadastro = this.formularioVazio();
    }

    public recebeConfirmacaoSalvar(formulario: {
        submitted: boolean;
        cadastro: ICadastroProfessor;
    }) {
        if (formulario.submitted) {
            this.formularioVazio();
        } else {
            this.cadastro.anoNumber =
                new Date(this.cadastro.ano).getFullYear() + 1;
            this.cadastro.mesDate = new Date(this.cadastro.mes);
        }
    }

    private converteMesTipoDate(mes: string): any {
        const mesDate = FuncoesUtils.converteMesParaDate(mes);
        return mesDate;
    }

    private formularioVazio(): ICadastroProfessor {
        return (this.cadastro = {
            todosDealers: false,
            preencherArquivo: false,
            id_dealer: '',
            id_categoria_venda: '',
            ano: null,
            anoNumber: FuncoesUtils.conversaoAnoAtual(),
            mes: null,
            mesDate: FuncoesUtils.conversaoMesAtual(),
            tipo_valor: 'S',
            valor: 0,
        });
    }
}

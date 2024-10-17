import { IListas } from "./components/sesi-listas"

export interface ICadastroProfessor {
    id?: number,
    nome_professor?: string,
    endereco?: string,
    cidade?: string,
    estado?: string,
    telefone?: string,
    cpf?: string,
    email?: string,
    numero_registro_profissional?: number,
    unidade_registro_profissinal?: string,
    estado_registro_profissional?: string,
    anoNumber?: number,
    todosDealers?: boolean,
    preencherArquivo?: boolean
}

export interface ICadastroProfessorsListas {
    dealers: IListas[],
    categoriaVenda: IListas[],
    ano: IListas[]
}
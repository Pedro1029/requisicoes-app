import { Departamento } from "./departamento.model";
import { Funcionario } from "./funcionario.model";
import { Model } from "../core/model";

export class Requisicao extends Model {

    solicitante: Funcionario | undefined;
    dataAbertura: any;
    ultimaAtualizacao: any;
    descricao: string | undefined;
    status: string | undefined;
    destino: Departamento | undefined;
    movimentacoes: Movimentacao[] | undefined;
}

export class Movimentacao extends Model {

    funcionario: Funcionario | undefined;
    dataHora: Date | undefined;
    status: string | undefined;
    descricao: string | undefined;
}
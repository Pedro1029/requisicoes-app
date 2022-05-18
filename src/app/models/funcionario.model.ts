import { Departamento } from "./departamento.model";
import { Model } from "../core/model"

export class Funcionario extends Model {

    nome : string | undefined;
    funcao : string | undefined;
    email : string | undefined;
    ultimoAcesso: Date | undefined;
    departamento : Departamento | undefined;
}

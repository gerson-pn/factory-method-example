import Comum from "../interface/comum";

export default abstract class Fabrica {
    abstract criarObjeto(): Comum
}
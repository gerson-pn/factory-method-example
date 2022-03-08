import comum from "../interface/comum";
import Objeto1 from "../modelo/objeto1";
import Fabrica from "./fabrica";

export default class FabricaObjeto1 extends Fabrica {
    criarObjeto(): comum {
        let objeto = new Objeto1()
        objeto.atributo1 = "atr1"
        objeto.atributo2 = "atr2"
        return objeto;
    }
}
import comum from "../interface/comum";
import Objeto2 from "../modelo/objeto2";
import Fabrica from "./fabrica";

export default class FabricaObjeto2 extends Fabrica {
    criarObjeto(): comum {
        let objeto = new Objeto2()
        objeto.atributo1 = "atr1"
        objeto.atributo2 = "atr2"
        return objeto;
    }
}
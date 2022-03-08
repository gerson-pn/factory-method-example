import FabricaObjeto1 from "./fabrica/fabricaObjeto1";
import FabricaObjeto2 from "./fabrica/fabricaObjeto2";

let fabrica = new FabricaObjeto2()
let objeto = fabrica.criarObjeto()
objeto.metodoComum()
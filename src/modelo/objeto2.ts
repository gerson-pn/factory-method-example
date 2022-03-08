import Comum from "../interface/comum"

export default class Objeto2 implements Comum {
    public atributo1!: string
    public atributo2!: string

    metodoComum(): void {
        console.log(`Sou um objeto 2 e eu não mostro meus atributos :(`)
    }
}
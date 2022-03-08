import Comum from "../interface/comum"

export default class Objeto1 implements Comum {
    public atributo1!: string
    public atributo2!: string

    metodoComum(): void {
        console.log(`Sou um objeto 1 e Meus atributos são:`)
        console.log(`Atributo 1: ${this.atributo1}, Atributo 2: ${this.atributo2}`)
    }
}
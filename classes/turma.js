class Turma {
    #codigo = 123
    #nota = 0

    constructor(codigo, nota) {
        this.#codigo = codigo
        this.#nota = nota
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(codigo) {
        this.#codigo = codigo;
    }

    get nota() {
        return this.#nota;
    }

    set nota(nota) {
        this.#nota = nota;
    }

    aprovado() {
        return this.#nota >= 7.0
    }
}

export default Turma;
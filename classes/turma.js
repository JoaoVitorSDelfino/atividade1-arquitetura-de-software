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

    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

    get nota() {
        return this.#nota;
    }

    set nota(novaNota) {
        this.#nota = novaNota;
    }

    aprovado() {
        return this.#nota >= 7.0
    }
}
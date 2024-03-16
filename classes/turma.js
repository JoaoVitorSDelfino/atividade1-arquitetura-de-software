class Turma {
    #codigo = 123
    #nota = 0
    #aluno = null

    constructor(codigo, nota, aluno) {
        this.#codigo = codigo
        this.#nota = nota
        this.#aluno = aluno
    }

    get codigo() {
        return this.#codigo
    }

    set codigo(codigo) {
        this.#codigo = codigo
    }

    get nota() {
        return this.#nota
    }

    set nota(nota) {
        this.#nota = nota
    }

    get aluno() {
        return this.#aluno
    }

    set aluno(aluno) {
        this.#aluno = aluno
    }

    aprovado() {
        return this.#nota >= 7.0
    }
}

export default Turma
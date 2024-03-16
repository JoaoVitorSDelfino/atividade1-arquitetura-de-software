class Aluno {
    nome = 'default'
    login = '123'
    ra = 321

    constructor(nome, login, ra) {
        this.nome = nome
        this.login = login
        this.ra = ra
    }

    get nome() {
        return this.nome
    }

    set nome(nome) {
        this.nome = nome
    }

    get login() {
        return this.login
    }

    set login(login) {
        this.login = login
    }

    get ra() {
        return this.ra
    }

    set ra(ra) {
        this.ra = ra
    }
}

export default Aluno
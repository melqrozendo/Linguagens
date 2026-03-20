import { validate } from 'email-validator'

export class Contato {
    private _nome: string
    private _telefone: string
    private _email: string
    private _dataNascimento: Date

    constructor(nome: string, telefone: string, email: string, dataNascimento: Date) {
        this._nome = nome
        this._telefone = telefone
        this._email = email
        this._dataNascimento = dataNascimento
    }

    // método get
    get nome(): string {
        return this._nome
    }

    get telefone(): string {
        return this._telefone
    }

    get email(): string {
        return this._email
    }

    get dataNascimento(): Date {
        return this._dataNascimento
    }

    // método set
    set nome(nome: string) {
        if(nome && nome.length > 0) {
            this._nome = nome
        } else {
            console.log('Nome é inválido')
        }
    }

    set telefone(telefone: string) {
        const regex = /^(\+\d{2}.)?\(\d{2}\).(\d{5}|\d{4})-\d{4}$/
        const validador = new RegExp(regex)
        if(telefone && validador.test(telefone)) {
            this._telefone = telefone
        } else {
            console.log('Telefone inválido')
        }
    }

    set email(email: string) {
        if(email && validate(email)) {
            this._email = email
        } else {
            console.log('E-mail inválido')
        }
    }

    set dataNascimento(dataNascimento: Date) {
        if( dataNascimento && dataNascimento < new Date()) {
            this._dataNascimento = dataNascimento
        } else {
            console.log('Data de Nascimento inválida')
        }
    }
}
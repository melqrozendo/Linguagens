export class ContaBancaria {
    private _saldo: number
    private _conta: string
    private _agencia: string

    // Inicializar o _saldo atraves do método Construtor
    constructor(conta: string = '00000-0', agencia: string = '0000-0') {
        // Uso do this faz referencia a um objeto que foi criado
        this._saldo = 0;
        this._conta = this._validaConta(conta) ? conta : '00000-0';
        this._agencia = this._validaAgencia(agencia) ? agencia : '0000-0';
    }

    // metodo get
    get conta(): string {
        return this._conta
    }

    get agencia(): string {
        return this._agencia
    }

    // metodo set
    set conta(valor: string) {

        if(this._validaConta(valor)) {
            this._conta = valor
        } else {
            console.log(`Formato de Conta inválido`)
        }

    }

    set agencia(valor: string) {

        if(this._validaAgencia(valor)) {
            this._agencia = valor
        } else {
            console.log(`Formato de Agência inválido`)
        }

    }

    // Toda ação é implementar um metodo
    consultar(): number {
        return this._saldo
    }

    depositar(valor: number): void {
        if(valor >= 0) {
            this._saldo += valor
        }
    }

    sacar(valor: number): boolean {
        if(valor >= 0 && this._saldo >= valor) {
            this._saldo -= valor
            return true
        }

        return false
    }

    // validando conta & agencia
    private _validaConta(valor: string): boolean {
        // validando valor usando expressao regulares - regex
        const regex = /^\d{5}-\d{1}$/

        if(regex.test(valor)) {
            this._conta = valor
            return true
        } 

        return false
    }

    private _validaAgencia(valor: string): boolean {
        // validando valor usando regex
        const regex = /^\d{4}-\d{1}$/

        if(regex.test(valor)) {
            this._agencia = valor
            return true
        } 

        return false
    }
}
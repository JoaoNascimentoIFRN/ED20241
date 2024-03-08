
class Vetor {
    constructor() {
        this._vetor = [];
    }

    inserirFinal(valor) {
        this._vetor[this._vetor.length] = valor;
    }

    inserirInicio(valor) {
        //this._vetor.unshift(valor);
        let novoVetor = [];
        novoVetor[novoVetor.length] = valor;
        //for (let elemento of this._vetor){
        for (let i = 0; i < this._vetor.length; i++) {
            novoVetor[novoVetor.length] = this._vetor[i];
        }
        this._vetor = novoVetor;

    }

    retirarInicio(){
        //this._vetor.shift();
        let novoVetor = [];
        for (let i = 1; i < this._vetor.length; i++) {
            novoVetor[novoVetor.length] = this._vetor[i];
        }
        this._vetor = novoVetor;
    }

    retirarFinal(){
        //this._vetor.pop();
        let novoVetor = [];
        for (let i = 0; i < this._vetor.length-1; i++) {
            novoVetor[novoVetor.length] = this._vetor[i];
        }
        this._vetor = novoVetor;
    }

    get vetor() {
        return this._vetor;
    }

}

module.exports = Vetor;

class Pilha {

    constructor(){
        this.vetor = [];
    }

    push(valor){
        this.vetor.push(valor);
    }

    pop(){
        return this.vetor.pop();        
    }

    peek(){
        if (this.vetor.length == 0)
            throw new Error("Pilha vazia");
        return this.vetor.at(-1);
    }

    isEmpty(){
        return this.vetor.length == 0;
    }

    size(){
        return this.vetor.length;
    }

    toString(){
        return this.vetor.toString();
    }

}


const pilha = new Pilha();
pilha.push(2);
pilha.push(5);
console.log(pilha.toString());
console.log("Topo da pilha:",pilha.pop());
pilha.pop();
pilha.push(10);
console.log(pilha.toString());
console.log("Tamanho da pilha: ", pilha.size())
pilha.push(7);
pilha.push(5);
pilha.push(23);
console.log("Topo da pilha: ", pilha.peek())
console.log("Tamanho da pilha: ", pilha.size())
console.log("Está vazia?: ", pilha.isEmpty())

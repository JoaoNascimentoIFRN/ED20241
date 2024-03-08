
const vetor = [1,2,3,4];

function inverterVetorComAuxiliar(vetor){
    let comprimento = vetor.length;
    
    const vetorAuxiliar = []
    for (let i=0; i < comprimento; i++){
        vetorAuxiliar.push(vetor.pop());
    }

    return vetorAuxiliar;
}

function inverterVetorSemAuxiliar(vetor){
    let inicio = 0;
    let fim = vetor.length - 1;
    while (inicio < fim){
        let temp = vetor[fim];
        vetor[fim] = vetor[inicio];
        vetor[inicio] = temp;
        inicio++;
        fim--;
    }
    return vetor;
}

function inverteVetorSimples(vetor){
    let novoVetor = [];
    for (let i=vetor.length - 1; i >= 0; i--)
        novoVetor.push(vetor[i]);
    return novoVetor;
}

//console.log(inverterVetorComAuxiliar(vetor));
console.log(inverterVetorSemAuxiliar(vetor));

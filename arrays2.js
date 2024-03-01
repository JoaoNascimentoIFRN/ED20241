const vetor = [1,20,1000,30];
const novoVetor = vetor.sort();
console.log(novoVetor)

function ordenar(a,b){
    return a - b;
}
//const novoVetorII = vetor.sort(function(a,b){return a - b});
//const novoVetorII = vetor.sort((a,b) => a - b);
const novoVetorII = vetor.sort(ordenar);
console.log(novoVetorII);

const pessoas = [{nome: "Joao", idade: 15},{nome: "André", idade: 10}];
const pessoasOrdenado = pessoas.sort((p1, p2) => p1.idade - p2.idade);
console.log(pessoasOrdenado);
for (let pessoa of pessoasOrdenado){
    console.log(pessoa.nome, pessoa.idade);
}

for (let pessoa in pessoasOrdenado[0]){
    console.log(pessoasOrdenado[0][pessoa])
}

const texto = "abcd";
for (let letra of texto){
    console.log(letra);
}
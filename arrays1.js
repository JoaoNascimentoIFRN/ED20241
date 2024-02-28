
//Formas de definição de arrays em JS
const vetor1 = [];  //Vetor vazio
const vetor2 = new Array(); //Outra forma de definir um vetor vazio
const vetor3 = [1,2,3,{nome: "Joao", idade: 35}] //Vetor inicializado
const vetor4 = new Array("teste",2,3); //Vetor inicializado
const vetor5 = new Array(10).fill(0); //Um vetor com 10 elementos de valor zero

//Vetor de vetores (arrays com mais de uma dimensão)
const vetor6 = [[1,2],[3,4]];
let posicao1 = vetor6[0]; //[1,2]
let posicao1De1 = vetor6[0][0]; //1

//Acessar elementos de um array
let primeiroValor = vetor5[0]; //Resgata o primeiro elemento
let ultimoValor = vetor5[vetor5.length - 1]; //Resgata o último elemento
let ultimoValor2 = vetor5.at(-1); //Resgata o último elemento

//Para inserir novos valores
const vetor = [1,2,{nome : "Joao"},[10,20]];
//vetor[0] = 1
//vetor[1] = 2
//vetor[2] = {nome : "Joao"}
//vetor[3] = [10,20]
vetor[4] = 3;
//vetor[5] = undefined
vetor[6] = 5;

/////////////////////////////////////////////////////////
//Como percorrer elementos de um vetor
for (let i=0;i<vetor.length;i++){
    //console.log(vetor[i]);
}

//vetor.forEach(function(valor){console.log(valor)});
//vetor.forEach(valor => console.log(valor));

for (let elemento of vetor){
    //console.log(elemento);
}

let i=0;
//while (i<vetor.length){
    //console.log(vetor[i++]);
//}

i = 0;
//do{
  //  console.log(vetor[i++]);
//}while(i<vetor.length);

/////////////////////////////////////////////////////////

console.log(typeof vetor);
console.log(vetor instanceof Array);
console.log(vetor instanceof Object);

//Outras maneiras de inserir elementos
const novoVetor = [1,2];
novoVetor.push(50); //Insere um novo elemento no final do vetor
novoVetor.pop(); //Retira o último elemento do vetor
novoVetor.unshift(1000); //Insere um elemento na posição zero do vetor 
novoVetor.shift(); //Retira o primeiro elemento
console.log(novoVetor);
delete novoVetor[1];
//Exercício
//1 - Crie uma classe JS para implementar um array com cinco métodos básicos: 
//inserirFinal, inserirInicio, retirarInicio e retirarFinal. Não utilize os 
//métodos push, pop, shift e unshift.
//class Vetor {
    //constructor(){
    //    this.vetor = []
    //}
    //inserirFinal(valor){
        //Código
    //}
//}





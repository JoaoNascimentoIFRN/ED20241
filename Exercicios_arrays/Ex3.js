const vetor = [3,4,-1,-3];

console.log(maiorSequenciaSoma(vetor));

function maiorSequenciaSoma(vetor){
    let maxTotal = vetor[0];
    let maxAtual = vetor[0];
    for (let i=1;i<vetor.length;i++){
        
        //maxAtual = Math.max(vetor[i], vetor[i] + maxAtual);
        //maxTotal = Math.max(maxAtual, maxTotal);
        
        /////////////////////////////
        
        if (vetor[i] + maxAtual > vetor[i]){
            maxAtual = maxAtual + vetor[i];
        }

        if (maxAtual > maxTotal){
            maxTotal = maxAtual;
        }
    }
    return maxTotal;
}
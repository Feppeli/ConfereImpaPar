//
// [ Capturando os elementos no HTML]
//
numero = document.getElementById('num') // input
document.getElementById('confere').onclick = botao// botao


function botao(){
    
    let valor = numero.value
    let posiNeg = Math.sign(valor)

    if (valor % 2 == 0 && posiNeg == 1){
        alert("Par e positivo")
    }
    else if ( valor % 2 !== 0 && posiNeg == 1){
        alert("Impar e positivo")
    }
    else if ( valor % 2 == 0 && posiNeg == -1){
        alert("Par e negativo")
    }
    else if ( valor % 2 !== 0 && posiNeg == -1){
        alert("Impar e negativo")
    }
    else if( posiNeg == +0 || posiNeg == -0){
        alert("Par e neutro")
    }
    else {
        alert('Digite um número')
    }
}    





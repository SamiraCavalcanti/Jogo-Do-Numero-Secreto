let listaDeNumerosSorteados =[];
let limiteDeChutes = 10;
let numeroSecreto = gerarNumeroAleatorio();
let  tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}


function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

}
exibirMensagemInicial();
function verificarChute() {
    // Pegando o valor digitado no input
    let chute = document.querySelector('input').value;
   
    if (numeroSecreto == chute) {
        exibirTextoNaTela('h1' ,'Parabéns, acertou!');
        let msg = tentativas == 1 ? 'tentativa' : 'tentativas';
        let quantidadeTentativas =` Você descobriu o número secreto com ${tentativas} ${msg}!` 
       ;
       exibirTextoNaTela('p',quantidadeTentativas);
       document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if (chute > numeroSecreto){
        exibirTextoNaTela('h1', 'Você errou!');
        exibirTextoNaTela('p', 'O número secreto é menor');
    }else{
       
        exibirTextoNaTela('p', 'O número secreto é maior');


    }
    tentativas++;
    limparChute();
    
}
}
    function gerarNumeroAleatorio() {
        let numerosEscolhidos= parseInt(Math.random() * limiteDeChutes) + 1;
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

        if(quantidadeDeElementosNaLista == limiteDeChutes){
            listaDeNumerosSorteados=[];
        }
    
    
        if(listaDeNumerosSorteados.includes(numerosEscolhidos)){
            gerarNumeroAleatorio();
        }else{
            
            listaDeNumerosSorteados.push(numerosEscolhidos);
            console.log(listaDeNumerosSorteados);
            return numerosEscolhidos;
            
        }

}

function limparChute() {
   chute = document.querySelector('input');
   chute.value = '';
    
}
 function reiniciarJogo(){
   numeroSecreto = gerarNumeroAleatorio();
    limparChute();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
 }




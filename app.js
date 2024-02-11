alert('Boas vindas ao jogo do numero secreto');
let numeromaximo = 500;
let numeroSecreto = parseInt(Math.random() *10 + 1);

// console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto não acerta
while (chute!= numeroSecreto) {
    chute = prompt(`escolha um numero de 1 a ${numeromaximo}`);   
    if (chute == numeroSecreto ) {
        break;
    }else{ 
        if (chute>numeroSecreto){
            alert (`seu numero é maior que o ${numeroSecreto}`);
        } else{
            alert (`seu numero é menor que o ${numeroSecreto}`);
    
        }
        tentativas ++;
    }

}

let palavraTentativa  = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Você descobriu o nume secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


// if ( tentativas > 1){
//     alert (`Você descobriu o nume secreto ${numeroSecreto} com ${tentativas}tentativas`);


// } else{
//     alert (`Você descobriu o nume secreto ${numeroSecreto} com ${tentativas}tentativa`);


// }
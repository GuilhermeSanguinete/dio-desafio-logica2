const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularSaldo(vitorias, derrotas){
    return vitorias - derrotas;
}

function rankearNivel(saldoVitorias){
    if(saldoVitorias <= 10){
        return "Ferro";
    }
    else if(saldoVitorias <= 20){
        return "Bronze";
    }
    else if(saldoVitorias <= 50){
        return "Prata";
    }
    else if(saldoVitorias <= 80){
        return "Ouro";
    }
    else if(saldoVitorias <= 90){
        return "Diamante";
    }
    else if(saldoVitorias <= 100){
        return "Lendário";
    }
    else if(saldoVitorias > 100){
        return "Imortal";
    }
}

rl.question('Digite a quantidade de vitórias do jogador: ', function(vitorias) {
  rl.question('Digite a quantidade de derrotas do jogador: ', function(derrotas) {
    vitorias = parseInt(vitorias);
    derrotas = parseInt(derrotas);

    saldoVitorias = calcularSaldo(vitorias, derrotas);
    nivel = rankearNivel(saldoVitorias);

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
    rl.close();
  });
});

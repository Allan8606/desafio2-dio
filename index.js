function caracteristicas(qntVitorias, qntDerrotas) {
    let saldoRanked = qntVitorias - qntDerrotas;
    let nivel;

    if (saldoRanked < 10) {
        nivel = "Ferro";
    } else if (saldoRanked > 10 && saldoRanked <= 20) {
        nivel = "Bronze";
    } else if (saldoRanked > 20 && saldoRanked <= 50) {
        nivel = "Prata";
    } else if (saldoRanked > 50 && saldoRanked <= 80) {
        nivel = "Ouro";
    } else if (saldoRanked > 80 && saldoRanked <= 90) {
        nivel = "Diamante";
    } else if (saldoRanked > 90 && saldoRanked <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Prata";
    }

    return "O Herói tem de saldo de " + saldoRanked + " está no nível " + nivel;
}

let informacoes = caracteristicas(70, 12);
console.log(informacoes);

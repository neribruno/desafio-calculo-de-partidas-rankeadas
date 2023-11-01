function calcularNivel(vitorias=99, derrotas=32) {
    let somatorio = vitorias - derrotas;
    let elo;

    if (somatorio < 10) {
        elo = "Ferro";
    } else if (somatorio >= 11 && somatorio <= 20) {
        elo = "Bronze";
    } else if (somatorio >= 21 && somatorio <= 50) {
        elo = "Prata";
    } else if (somatorio >= 51 && somatorio <= 80) {
        elo = "Ouro";
    } else if (somatorio >= 81 && somatorio <= 90) {
        elo = "Diamante";
    } else if (somatorio >= 91 && somatorio <= 100) {
        elo = "Lendário";
    } else {
        elo = "Imortal";
    }

    console.log("O Herói tem um saldo de " + somatorio + ", portanto, está no elo " + elo);
}

calcularNivel();
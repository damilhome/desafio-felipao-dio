nomeDoHeroi = "Sadhguru";
nivelDoHeroi = "";
quantidadeDeXp = 10000000;

if (quantidadeDeXp < 1000) {
    nivelDoHeroi = "Ferro";
} else if (quantidadeDeXp > 1000 && quantidadeDeXp < 2001) {
    nivelDoHeroi = "Bronze";
} else if (quantidadeDeXp > 2000 && quantidadeDeXp < 5001) {
    nivelDoHeroi = "Prata";
} else if (quantidadeDeXp > 5000 && quantidadeDeXp < 7001) {
    nivelDoHeroi = "Ouro";
} else if (quantidadeDeXp > 7000 && quantidadeDeXp < 8001) {
    nivelDoHeroi = "Platina";
} else if (quantidadeDeXp > 8000 && quantidadeDeXp < 9001) {
    nivelDoHeroi = "Ascendente";
} else if (quantidadeDeXp > 9000 && quantidadeDeXp < 10001) {
    nivelDoHeroi = "Imortal";
} else if (quantidadeDeXp > 10000) {
    nivelDoHeroi = "Radiante";
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi + ".");

let rankedBalance = getRankedBalance(105, 2);
let playerLevel = getPlayerLevel(rankedBalance);

console.log(`O Herói possui o saldo de ${rankedBalance}, estando no nível ${playerLevel}.`)

function getRankedBalance(victories, defeats) {
    let balance = victories - defeats;
    return balance;
}

function getPlayerLevel(rankedBalance) {
    let playerLevel = "";
    if (rankedBalance < 11) {
        playerLevel = "Ferro";
    } else if (rankedBalance > 10 && rankedBalance < 21) {
        playerLevel = "Bronze";
    } else if (rankedBalance > 20 && rankedBalance < 51) {
        playerLevel = "Prata";
    } else if (rankedBalance > 50 && rankedBalance < 81) {
        playerLevel = "Ouro";
    } else if (rankedBalance > 80 && rankedBalance < 91) {
        playerLevel = "Diamante";
    } else if (rankedBalance > 90 && rankedBalance < 101) {
        playerLevel = "Lendário";
    } else if (rankedBalance > 100) {
        playerLevel = "Imortal";
    }
    return playerLevel;
}
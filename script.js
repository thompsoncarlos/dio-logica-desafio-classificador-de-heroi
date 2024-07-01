// Deve ser utilizado:
// Variáveis, Operadores, Laços de repetição e Estruturas de decisões

let nomeHeroi = "Thompson";
let quantidadeXp = 5000;
let nivelXp = "";

if (quantidadeXp < 1001){
  nivelXp = "Ferro";
}
else if (quantidadeXp >= 1001 && quantidadeXp < 2000){
  nivelXp = "Bronze";
}
else if (quantidadeXp >= 1001 && quantidadeXp < 2000){
  nivelXp = "Prata";
}
else if (quantidadeXp >= 1001 && quantidadeXp < 2000){
  nivelXp = "Ouro";
}
else if (quantidadeXp >= 1001 && quantidadeXp < 2000){
  nivelXp = "Platina";
}
else if (quantidadeXp >= 1001 && quantidadeXp < 2000){
  nivelXp = "Ascendente";
}
else if (quantidadeXp >= 1001 && quantidadeXp < 2000){
  nivelXp = "Imortal";
}
else {
  nivelXp = "Radiante";
}

switch(nivelXp) {
  case "Ferro":
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelXp);
    break;
  case "Bronze":
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelXp);
    break;
  case "Ouro":
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelXp);
    break;
  case "Platina":
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelXp);
    break;
  case "Ascendente":
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelXp);
    break;
  case "Imortal":
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelXp);
    break;
  case "Radiante":
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelXp);
    break;
}
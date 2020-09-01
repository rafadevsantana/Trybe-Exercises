// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals


const peca= "bispo" 


if (peca == "piao"){
    console.log("para todos os lados menos para diagonais, uma casa por vez")
}
else if (peca == "bispo"){
    console.log("diagonais quantas casas quiser")
}
else if (peca == "torre"){
    console.log("anda em todas as direcoes menos para diagonais quantas casa quiser")
}
else if (peca == "cavalo"){
    console.log("anda em L dua para frente e duas para o lado")
}
else if (peca == "rainha"){
    console.log("anda em todas as direçoes sem exeção")
}
else if (peca == "rei"){
    console.log(" anda em todas as direçoes apenas uma casa por vez")
}
 else {
    console.log("peca inexistente")
}
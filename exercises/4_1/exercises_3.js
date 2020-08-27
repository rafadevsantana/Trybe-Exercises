//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

const x = 59;
const y = 57;
const z = 100;

if (x > y && x > z){
    console.log('x é maior numero')
}
else if (y > x || y > z){
    console.log("y é o maior numero")
}
else {
    console.log('z é maior numero')
}
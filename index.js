let resultado = diminuir(85, 2)//entre parenteses o numero de vitorias seguido do numero de derrotas do jogador

function diminuir(vitorias, derrotas){
	let diminuicao = vitorias - derrotas
    return diminuicao
}

if (resultado <= 10){
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível Ferro")
}
else if (resultado >= 11 && resultado <= 20) {
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível Bronze")
}
else if (resultado >= 21 && resultado <= 50) {
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível Prata")
}
else if (resultado >= 51 && resultado <= 80) {
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível Ouro")
}
else if (resultado >= 81 && resultado <= 90) {
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível Diamante")
}
else if (resultado >= 91 && resultado <= 100) {
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível Lendário")
}
else if (resultado >= 101) {
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível Imortal")
}
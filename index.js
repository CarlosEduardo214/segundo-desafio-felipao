let resultado = diminuir(10, 2)//entre parenteses o numero de vitorias seguido do numero de derrotas do jogador

console.log("O número de vitórias é " + resultado)

function diminuir(vitorias, derrotas){
	let diminuicao = vitorias - derrotas
    return diminuicao
}

if (resultado <=10){
    console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível Ferro")
}
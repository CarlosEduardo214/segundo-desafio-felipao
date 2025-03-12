let resultado = diminuir(10, 2)//entre parenteses o numero de vitorias seguido do numero de derrotas do jogador

console.log("O número de vitórias é " + resultado)

function diminuir(vitorias, derrotas){
	let diminuicao = vitorias - derrotas
    return diminuicao
}
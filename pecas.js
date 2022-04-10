let pesoPeca = 200
let numeroPecas = 10
let listapecas=["disco de freio", "motor", "pastilha de freio", "pneu", "roda","pivo","volante", "velas", "oleo"]
let nomePeca = "Disco de freio"

    //verificação peso da peça 

if(pesoPeca > 100) {
    // pode cadastrar 
   console.log("peso adequado, podemos cadastrar")

} else{
    // não podemos cadastrar
    console.log("peso menor que 100g, não pode cadastrar")
}
    // verificação do tamanho da lista de peças

if (listapecas.length >= 10) {
    // capacidade maxima atingida
    console,log("capacidade maxima atingida")
} else {
    // ainda a espaço para cadastro
    console.log("ainda há espaço para cadastro")
}

    // verificação do nome da peça
if (nomePeca.length < 3) {
    // nome inválido
    console.log("Nome inválido, o nome precisa ter 3 caracteres ou mais")
} else {
    // nome de peça adequado
    console.log("Nome adequado")
}




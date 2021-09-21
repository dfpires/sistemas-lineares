
let principal = () => {

    // criação de uma matriz com 3 linhas e 4 colunas
    let matriz = new Array(3) // 3 linhas
    matriz[0] = new Array(4)
    matriz[1] = new Array(4)
    matriz[2] = new Array(4)

    leitura(matriz)
    saida(matriz)
}

let leitura = (matriz) => {
    for(let i=0;i<3;i++) {
        alert(`Informe os dados da equação ${i+1}`)
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Informe valor da matriz [${i+1}] [${j+1}]`))
        }
    }
}

let saida = (matriz) => {
    console.log(matriz)
}
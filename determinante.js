
let principal = () => {

    // criação de uma matriz com 3 linhas e 4 colunas
    let matriz = new Array(3) // 3 linhas
    matriz[0] = new Array(4)
    matriz[1] = new Array(4)
    matriz[2] = new Array(4)

    let matriz35 = new Array(3) // 3 linhas
    matriz35[0] = new Array(5)
    matriz35[1] = new Array(5)
    matriz35[2] = new Array(5)

    leitura(matriz) // leitura da matriz 3 x 4
    criaMatriz35(matriz, matriz35) // cria a matriz 3 x 5
    calculaDet(matriz35)
    //saida(matriz) // saída da matriz original
    //saida(matriz35) // saída da matriz 3 x 5
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

let criaMatriz35 = (matriz, matriz35) => {
    // copia na íntegra
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            matriz35[i][j] = matriz[i][j]
        }
    }
    for(let j=0;j<2;j++){
        for(let i=0;i<3;i++){
            matriz35[i][j+3] = matriz[i][j]
        }
    }
}

let calculaDet = (matriz35) => {

    let somaDiagonalPrincipal = 0
    let somaMult = 0
    let somaDiagonalSecundaria = 0

    for(let aux = 0; aux < 3; aux++) {
        somaMult = 1
        for(let i=0;i<3;i++){
            somaMult = somaMult * matriz35[i][i+aux]
        }
        somaDiagonalPrincipal = somaDiagonalPrincipal + somaMult
    }
    console.log(somaDiagonalPrincipal)


    let teste = 2
    for(let aux = 2; aux >=0; aux--) {
        somaMult = 1
        for(let i=0;i<3;i++){
            somaMult = somaMult * matriz35[i][(teste)-i]
        }
        somaDiagonalSecundaria = somaDiagonalSecundaria + somaMult
        teste++
    }
    console.log(somaDiagonalSecundaria)
    console.log(`${somaDiagonalPrincipal - somaDiagonalSecundaria}`)
}
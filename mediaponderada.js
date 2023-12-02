const { Console } = require('console')
const readline = require('readline')

function statusAluno(media){
    if(media >= 5){
        console.log('Aluno Aprovado')
s
    } 

    if(media < 5){
        console.log('Aluno reprovado')
    }
}

function mediaPonderada(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question('Digite o código do aluno: ', (codigo) => {
        rl.question('Digite a primeira nota: ', (N1) => {
            rl.question('Digite a segunda nota: ', (N2) => {
                rl.question('Digite a terceira nota: ', (N3) => {

                    const pesoN1 = 4
                    const pesoN2 = 3
                    const pesoN3 = 3

                    const valorN1 = parseFloat(N1)
                    const valorN2 = parseFloat(N2)
                    const valorN3 = parseFloat(N3)

                    if(!isNaN(valorN1) && !isNaN(valorN2) && !isNaN(valorN3)) {

                        const calculo = (valorN1 * pesoN1 + valorN2 * pesoN2 + valorN1 * pesoN3) / (pesoN1 + pesoN2 + pesoN3)
                        
                        console.log('Sua média é: ', calculo)

                        statusAluno(calculo)
                    } else {
                        console.log('Informação inválida')
                    }
                })

                rl.question()
            })
        })
    })
}

mediaPonderada()


    
    
//inicio - entrada de dados
import rlsync from 'readline-sync'

const semana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]

const mes = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

console.log('-- Menu --')
console.log('Pressione 1 - para Juros Simples')
console.log('Pressione 2 - para Juros Compostos')

let opcao = rlsync.question('Escolha: ')

switch (opcao) {
  case '1':
    //formula juros simples J = C * i * t
    let J = 0 //Juros
    let C = 0 //Capital emprestado
    let i = 0 //Taxa de juros do período
    let t = 0 //Tempo

    C = rlsync.question('Informe o valor do aporte inicial: ')
    let taxa = rlsync.question(
      'A taxa de juros é:\n 1 - Ao dia\n 2 - Ao mês\n 3 - Ao ano\n'
    )

    switch (taxa) {
      case '1':
        t = rlsync.question('Informe quantos dias: ')
        i = rlsync.question('Informe a taxa de juros do período: ')
        J = C * (i / 100) * t + Number(C)
        console.log('Capital inicial: R$ ' + C)
        console.log('Dias contemplados: ', t, 'dias')
        console.log('taxa de juros: ' + i + '%')
        console.log('Valor atualizado: R$', J)
        break
      case '2':
        t = rlsync.question('Informe quantos meses: ')
        i = rlsync.question('Informe a taxa de juros do período: ')
        J = C * (i / 100) * t + Number(C)
        console.log('Capital inicial: R$ ' + C)
        console.log('Meses contemplados: ', t, 'dias')
        console.log('taxa de juros: ' + i + '%')
        console.log('Valor atualizado: R$', J)
        break
      case '3':
        t = rlsync.question('Informe quantos anos: ')
        i = rlsync.question('Informe a taxa de juros do período: ')
        J = C * (i / 100) * t + Number(C)
        console.log('Capital inicial: R$ ' + C)
        console.log('Anos contemplados: ', t, 'dias')
        console.log('taxa de juros: ' + i + '%')
        console.log('Valor atualizado: R$', J)
        break
      default:
        console.log('Algum erro aconteceu aqui, reinicie a calculadora.')
      // console.log('Valor original da dívida: R$ ' + Number(C))
      // console.log('Dias atrasados: ', t, 'dias')
      // console.log('taxa de juros: ' + i + '%')
      // console.log('Dívida atualizada: R$', J)
    }
    break
  case '2':
    let resultado = 0
    let aporte = 100
    let taxaJ = 1 / 100
    let periodo = 2
    let periodoResgate = 1

    resultado =
      aporte *
      ((Math.pow(1 + taxaJ, periodo) - 1) / taxaJ) *
      Math.pow(1 + taxaJ, periodoResgate)

    console.log(resultado)
    //     let juros = Number(rlsync.question('Informe a taxa de juros do período: '))
    //     let periodo = Number(rlsync.question('Informe quantos meses: '))
    //     let aporte = Number(rlsync.question('Informe o valor do aporte inicial: '))

    //     juros /= 100
    //     let resultado = 0
    //     let contador = 0

    //     if (periodo <= 0 && contador == 0) {
    //       var f = aporte.toLocaleString('pt-br', {
    //         style: 'currency',
    //         currency: 'BRL'
    //       })
    //       console.log('O valor atualizado é ' + f)
    //     } else {
    //       contador = 1
    //       do {
    //         periodo == 1
    //           ? (resultado = aporte + aporte * juros)
    //           : (resultado = aporte + resultado * juros + resultado)
    //         console.log(resultado)
    //         contador++
    //         continue
    //       } while (contador <= periodo)
    //       var f = resultado.toLocaleString('pt-br', {
    //         style: 'currency',
    //         currency: 'BRL'
    //       })
    //       console.log('O valor atualizado é ' + f)
    //     }
    break
  default:
    console.log('Algum erro aconteceu aqui, reinicie a calculadora.')
}

//futureValue = PMT [ (((1 + i)elN) - 1)/i]*(1 + i)elN2

// let data = new Date()
// console.log(
//   'Hoje é ' +
//     semana[data.getDay()] +
//     ', ' +
//     data.getDate() +
//     ' de ' +
//     mes[data.getMonth()] +
//     ' de ' +
//     data.getFullYear()
// )

// var date1 = new Date('7/11/2010')
// var date2 = new Date('12/12/2010')
// var timeDiff = Math.abs(date2.getTime() - date1.getTime())
// var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))

// console.log(diffDays)

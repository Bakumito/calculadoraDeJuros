//inicio - entrada de dados
import rlsync from 'readline-sync'

//formula juros simples J = C * i * t
//formula juros composto J = C * ((Math.pow(1 + i, t) - 1) / i) * Math.pow(1 + i, periodoResgate)
let J = 0 //capital atualizado com juros
let C = 0 //Capital
let i = 0 //Taxa de juros do período
let t = 0 //Tempo
console.log('----- Inicio -----')
console.log('Pressione 1 - para Juros Simples')
console.log('Pressione 2 - para Juros Compostos')
let opcao = rlsync.question('Escolha: ')

console.log('\n----- Período da Taxa -----')
console.log('Pressione 1 - Ao dia')
console.log('Pressione 2 - Ao mês')
console.log('Pressione 3 - Ao ano')
let taxa = rlsync.question('Escolha: ')

C = rlsync.question('\nInforme o valor do aporte inicial: ')
t = rlsync.question('Informe qual o período: ')
i = rlsync.question('Informe a taxa de juros do período: ')
i /= 100

switch (opcao) {
  case '1':
    J = C * i * t + Number(C)
    console.log('\nCapital inicial: R$ ' + C)
    switch (taxa) {
      case '1':
        console.log('Dias contemplados: ', t, 'dias')
        break
      case '2':
        console.log('Meses contemplados: ', t, 'meses')
        break
      case '3':
        console.log('Anos contemplados: ', t, 'anos')
        break
      default:
        console.log('Algum erro aconteceu aqui, reinicie a calculadora.')
    }
    console.log('taxa de juros: ' + i * 100 + '%')
    var brl = J.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
    console.log('O valor atualizado é ' + brl)
    break
  case '2':
    let periodoResgate = 1
    J = C * ((Math.pow(1 + i, t) - 1) / i) * Math.pow(1 + i, periodoResgate)
    J = Number(J) + Number(C)
    var brl = J.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
    console.log('\nCapital inicial: R$ ' + C)
    switch (taxa) {
      case '1':
        console.log('| Dias contemplados: ', t, 'dias')
        break
      case '2':
        console.log('Meses contemplados: ', t, 'meses')
        break
      case '3':
        console.log('Anos contemplados: ', t, 'anos')
        break
      default:
        console.log('Algum erro aconteceu aqui, reinicie a calculadora.')
    }
    console.log('taxa de juros: ' + i * 100 + '%')
    console.log('O valor atualizado é ' + brl)
    break
  default:
    console.log('Algum erro aconteceu aqui, reinicie a calculadora.')
}

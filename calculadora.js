//inicio - entrada de dados
import rlsync from 'readline-sync'
//formula juros simples J = C * i * t
// J = Juros.
// C = Capital emprestado.
// i = Taxa de juros do período.
// t = Tempo.
let c = rlsync.question('Informe o valor do empréstimo: ')
let t = rlsync.question('Informe quantos dias de atraso: ')
let i = rlsync.question('Informe a taxa de juros cobrada: ')
let j = c * (i / 100) * t

console.log('Valor original da dívida: R$ ' + c)
console.log('Dias atrasados: ', t, 'dias')
console.log('taxa de juros: ' + i + '%')
console.log('Dívida atualizada: R$', j)

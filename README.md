# juros-compostos

# Projeto de finalização do curso de introdução a javascript do DevMedia

O que será feito?
O objetivo deste passo é conhecer o nosso sistema de aplicação de juros, suas especificações e sua arquitetura.

A ideia é que ao final deste passo você seja capaz de identificar sozinho a arquitetura da aplicação para poder utilizá-la como base na construção do sistema, como vemos na Figura 1.

Especificação do sistema de aplicação de juros
Do que se trata esse passo?
Antes de iniciar de fato o Passo 1 e começar a definir a arquitetura da aplicação, precisamos conhecer suas especificações, e é isso que faremos aqui:

Aplicação de cálculo de juros

O objetivo da aplicação é calcular o valor total da dívida com juros com base nas informações fornecidas a ela.

Requisitos:

O usuário da aplicação deve informar o valor da dívida e o número de dias que ela se encontra em atraso.
O valor da dívida deve ser maior que zero, caso contrário, a aplicação deve informar ao usuário do problema e encerrar
O número de dias nos ajuda a determinar a taxa de juros.
Dívidas com mais de 15 dias de atraso tem uma taxa de 10% de juros aplicada sobre o valor da dívida, já as dívidas com menos de 15 dias de atraso tem uma taxa de apenas 5% de juros sobre o valor da dívida.
Os juros só devem ser aplicados, se houver ao menos um dia de atraso, do contrário, o usuário é considerado "em dia" e a aplicação deve ser encerrada com uma mensagem de aviso.
O download do documento contendo esse minimundo pode ser visto no final deste passo.

Do que se trata esse passo?
Agora que já conhecemos a ideia da aplicação e suas especificações, vamos prosseguir para o início do nosso Passo 1, definir a arquitetura da aplicação:

Fontes do projeto
Disponibilizamos o documento do minimundo para download no link abaixo:
https://www.devmedia.com.br/winrar/42687

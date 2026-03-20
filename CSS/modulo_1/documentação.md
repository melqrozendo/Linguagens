Aula de Flexbox - Layout flexiveis

Obs: As tag 'div' por padrao o display são block

1-EIXOS
Eixos de trabalho no layout
main axis: deve ser trabalhado da esquerda para direita
cross axis: deve ser trabalhado de cima para baixo

2-PROPRIEDADES
2.1-Propriedades para conteiner: 
São estilos de layut que definem o container
Exemplos:
2.1.1-FLEX-DIRECTION
Altera a direçao do itens no container no main axis

2.1.2-FLEX-WRAP
Usado para definir quebra de linha
nowrap - quebra de linha desativada
wrap - quebra de linha ativada

2.1.3-JUSTIFY-CONTENT
Usado para alinhar elementos pelo main axis (ou eixo principal)

2.1.4-ALIGN-ITEMS
Usado para alinhar elementos no cross axis (ou eixo secundario) com espacamento

2.1.5-ALIGN-CONTENT
Usado para alinhar elementos no cross axis (ou eixo secundario) sem espacamento

2.2-Propriedades para items:
São estilos de layout que definem o item

2.2.1-FLEX-GROW
Usado para definir o tamanho padrao de acordo com o conteudo dos itens
Obs: se tiver flex-grow no item o justify-content não vai funcionar

2.2.2-FLEX-BASIS
Usado para definir o tamanho padrao sem se importar com o conteudo do item

2.2.3-ORDER
Usado para redefinir a ordem dos elementos dentro de um container

2.2.4-FLEX-SHRINK
Usado para verificar a capacidade que um elemento tem para reduzir o tamanho dentro de um container
Obs: usado quando nao existe propriedade de quebra de linha
Obs: quando maior a capacidade maior a reducao doe elemento
Obs: deve definir a largura do item com a propriedade width

2.2.5-FLEX
Usado para definir um atalho para grow -n, shrink -1, basis -0.

2.2.6-ALIGN-SELF
Usado para alinhar um elemento especifico do container
Obs: deve se verificar o flex-direction, caso seja row o alinhamento é vertical,
caso seja column o alinhamento é horizontal
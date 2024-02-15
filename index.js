//variável perguntas
const perguntas = [
    //estrutura de perguntas criadas com o ChatGPT
     {
       pergunta: "O que significa 'DOM' em JavaScript?",
       respostas: [
         "Documento de Objeto Móvel",
         "Modelo de Objeto de Documento",
         "Modelo de Operação de Dados",
       ],
       correta: 1
     },
     {
       pergunta: "Qual desses é um tipo de dado primitivo em JavaScript?",
       respostas: [
         "Array",
         "String",
         "Object",
       ],
       correta: 1
     },
     {
       pergunta: "Qual método de array é usado para remover o último elemento?",
       respostas: [
         "pop()",
         "shift()",
         "splice()",
       ],
       correta: 0
     },
     {
       pergunta: "Como você declara uma variável em JavaScript?",
       respostas: [
         "let myVar;",
         "variable myVar;",
         "myVar = var;",
       ],
       correta: 0
     },
     {
       pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
       respostas: [
         "==",
         "===",
         "=",
       ],
       correta: 1
     },
     {
       pergunta: "O que o método 'addEventListener' faz em JavaScript?",
       respostas: [
         "Remove um ouvinte de evento",
         "Adiciona um ouvinte de evento",
         "Atualiza um ouvinte de evento",
       ],
       correta: 1
     },
     {
       pergunta: "Qual dessas é uma maneira de criar um loop em JavaScript?",
       respostas: [
         "for i = 0; i < 5; i++",
         "loop (i = 0; i < 5; i++)",
         "for (let i = 0; i < 5; i++)",
       ],
       correta: 2
     },
     {
       pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
       respostas: [
         "Retorna o tipo de um objeto",
         "Verifica a igualdade de tipos",
         "Converte um tipo de dados para outro",
       ],
       correta: 0
     },
     {
       pergunta: "Qual é a saída de 'console.log(typeof [])'?",
       respostas: [
         "object",
         "array",
         "undefined",
       ],
       correta: 0
     },
     {
       pergunta: "O que o método 'querySelector()' faz em JavaScript?",
       respostas: [
         "Seleciona o primeiro elemento que corresponde a um seletor CSS",
         "Remove todos os elementos que correspondem a um seletor CSS",
         "Atualiza todos os elementos que correspondem a um seletor CSS",
       ],
       correta: 0
     },
   ];
   
   //objeto document - transforma tudo que tem no documento como um objeto JS - querySelector Função de Pesquisa - variável templete do HTML... '#quiz' = id='quiz'
   
   const quiz = document.querySelector('#quiz')
   const template = document.querySelector('template')
   
   // loop ou laço de repetição
   //variável item - repete para cada item de pergunta 
   //variável quizItem = cloneNode vai clonar o conteúdo do template (HTML)
   
   //New = Novo - Set (guarda a informação)
   const corretas = new Set()
   const totalDePerguntas = perguntas.length
   //pesequisa id aceros o span (filho)
   const mostrarTotal = document.querySelector('#acertos span')
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   
   
   for (const item of perguntas){
   const quizItem = template.content.cloneNode(true)
   //Mudar o título do item com o título da pergunta (pesquisa pelo H3) - item.pergunta (estrutura de perguntas criadas com o ChatGPT)
   quizItem.querySelector('h3').textContent = item.pergunta
   
   
   //para cada resposta - cada item vai rodar 3x (estrutura de perguntas criadas com o ChatGPT)
   for(let resposta of item.respostas){
     // dt = subitem (HTML) - Pesquisa dl e dt (dt (item) é filho de dl (lista)) - faz o clone
     //Muda o conteúdo do span (HTML - Resposta A) = texto "resposta" variável número no loop
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     //indice = array {} - procura o índice do item - procura o indice de cada resposta (guarda o valor selecionado) - indice resposta =    dt.querySelector('input').setAttribute('name','pergunta' +  ou perguntas.indexOf(item))
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
    //verificar se o valor correto está selecionado - verificar uma ação na tela - eventos da tela (evento de mudança de input) - onchange (ao mudar) exige uma função (=> = seta = função "arrow function") - guarda o indice da resposta e compara se ele esta correta - comparação = verdadeiro ou falso - comparação do valor selecionado com o texto da resposta - == compara sem considerar o tipo valor x  string
    //fazer a soma das respostas corretas - quando clicar na correta e mudar de opção, caso encontre o item deleta
     dt.querySelector('input').onchange = (evento) => { 
       const estaCorreta = event.target.value == item.correta
         corretas.delete(item)
         if(estaCorreta) {
           corretas.add(item)
         }
   
         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   
       }
   //coloca no HTML codigo para criar o resultado no fim da tela do quizz
   //variável não se coloca espaco, substitui o espaço pela próxima palavra iniciando em maiúsculo
   //coloca na tela - pesquisa o dl (lista perguntas) e adiociona o filho dt (itens da lista)
     quizItem.querySelector('dl').appendChild(dt)
   }
   //remove a "Resposta A" (HTML)
   quizItem.querySelector('dl dt').remove()
   
   // coloca a pergunta na tela
   quiz.appendChild(quizItem)
     }
   
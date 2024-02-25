const perguntas = [
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
   
   const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}

// Object
/*const person = {
    name: 'john',
    age: 30,
    weght: 1.83,
    isAdmin: true
}
console. log('${person.name} tem ${person.age} anos')

// Array
const animals = [
    'Lion',
    'Monkey',
    'cat'
]
// acessar valores dentro do array
console. log(animals[0])
//usar colchetes
*/

// 1. Declare uma variável de nome weight
// let weight
// // 2. Que tipo de dado é a variável acima
// console. log(typeof weight)
// undefined
/*
  3. Declare uma variável e atribua valores para cada um dos dados:
      *name: String
      * age: Number (integer)
      * stars: Number (float)
      * isSubscribed: Boolean
  */
//  let name = "véio"
//  let age = 29
//  let stars = 4.8
//  let isSubscribed = true

 /*
  4. A variável student abaixo é de que tipo de dado?

  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

  4.3 Mostre no console a seguinte mensagem:

  <name> de idade <age> pesa <weight> kg.

  Atenção, substitua <name> <age> e <weight> pelos
  valores de cada propriedades do objeto
  */

  let student = {
    name: "Véio",
    age: 29,
    weight: 109.2,
    isSubscribed: true,
  }

  // console. log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente array vazio
*/
let students = []

/*
  6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da quetstão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
 */

students = [
    student
]

/*
  7. Coloque no console o valor da posição zero do Array acima
 */

  console. log(students [0])

  /*
  8. Crie um noco student e coloque na posição 1 do Array students
     */

  const john = {
    name: "john",
    age: 29,
    weight: 74.8,
    isSubscribed: true,
  }

  students = [
    student,
    john
  ]
 
  /*
    9. Sem rodar o código responsa qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou

    console. log(a)
    var a = 1

    undefined
   */
    console. log(a)
    var a = 1

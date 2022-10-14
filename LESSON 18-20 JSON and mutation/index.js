/*
-----------------------------------------------------
JSON - JavaScript object notation
Это формат обмена данными
Пример:
{
    "userId": 1,
    "id": 1,
    "title": "Test title",
    "status": {
        "completed": false
    }
}

Передача данных в формате JSON - передаётся в виде строки

{"userId":1,"id":1,"title":"Test title","status":{"completed":false}}

Конвертация JSON в JS объект

Есть метод - JSON.parse() - получив JSON в формате строки из сервера могу передать 
его как аргумент в вызове метода парс (parse) и в результате получу JS объект.  

Конвертация JS объекта в JSON

Есть метод - JSON.stringify() - переводит JS объект в JSON. 


// const post = {
//     title: 'My post',
//     likesQty: 5
// }
// JSON.stringify(post)

// const postStringified = JSON.stringify(post)
// JSON.parse(postStringified)
-----------------------------------------------------
Мутация в JavaScript

Как копируются значения примитивных типов ? 
Пример ниже :

const a = 10
let b = a
b = 30
console.log(a) - 10
console.log(b) - 30

Значения ссылочного типа
Пример : 

const person = {
    name: 'Bob',
    age: 21
} 

person.age = 22                         произошла мутация объекта , на который ссылается переменная "person"
person.isAdult = true                   копирование по значению (copy by value)

console.log(person.age) - 22
console.log(person.isAdult) - true


МУТИРОВАНИЕ КОПИЙ 
ПРИМЕР НИЖЕ:

const person = {
    name: 'Bob',
    age: 25
} 
const person2 = person                      копирование ссылки (copy by reference)

person2.age = 26
person2.isAdult = true

console.log(person.age) - 26
console.log(person.isAdult) - true
-----------------------------------------------------
КАК ИЗБЕЖАТЬ МУТАЦИИ ?
объснение на примере :
Пример №1
const person = {
    name: 'Bob',
    age: 25
} 

const persone2 = Object.assing({}, person)

persone2.age = 26

console.log(person2.age) - 26
console.log(persone.age) - 25

Пример №2
const person = {
    name: 'Bob',
    age: 25
} 
const persone2 = { ...person }      этот синтаксис ... (оператор разделения объекта на свойства)

persone2.name = 'Alice'

console.log(person2.name) - Alice
console.log(persone.name) - Bob

Пример №3
Полное избежение мутации
const person = {
    name: 'Bob',
    age: 25
} 
const persone2 = JSON.parse(JSON.stringify(persone))        конвертация в объект , после конвертация в строку !!!

persone2.name = 'Alice'

console.log(person2.name) - Alice
console.log(persone.name) - Bob
*/

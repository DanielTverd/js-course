/*
-----------------------------------------------------------
ФУНКЦИИ

Это блок кода , который можно выполнять многократно !!!
Пример :

let a = 5                                         
let b = 3                                                                        
let c                                                                      
c = a + b
console.log(c) - 8
                        одинаковые блоки кода (нужно оптимизировать! смотреть внизу)            
let a = 8
let b = 12
let c
c = a + b
console.log(c) - 20

ОПТИМИЗАЦИЯ

let a = 5
let b = 3
function sum(a, b) {
    const c = a + b
    console.log(c)
}

sum(a, b) - 8

a = 8
b = 12
sum(a, b) - 20

ФУНКЦИЯ МОЖЕТ БЫТЬ ...
1.именованной
2.присвоенна переменной
3.анонимной
4.аргументом при вызове другой функции
5.значением свойства (метода) объекта

ФУНКЦИЯ ЭТО ОБЪЕКТ !!!
-----------------------------------------------------------
ОБЪЯВЛЕНИЕ И ВЫЗОВ ФУНКЦИИ

function myFn(a, b) {                имя функции - myFn , два параметра - a и b
    let c                                              тело
    a = a + 1                                         функции
    c = a + b
    return c
}
Параметры действуют внутри функции, але получать доступ к параметрам вне функции, то ошибка (переменная не определена)

После инструкции RETURN функция прекращает свою работу !!!

ЕСЛИ ФУНКЦИЯ ВОЗВРАЩАЕТ UNDEFINED , ТО НЕТ ИНСТРУКЦИИ RETURN !!!!! функция всегда возвращает какое-то значение

Вызов функции 

function myFn(a, b) {           
    let c                               
    a = a + 1                                 
    c = a + b
    return c
}

myFn(10, 3) - 14            - синтаксис вызова функции ; 10, 3 - аргументы !!! 


Самая короткая функция :

function myFn () {}
myFn() - undefined
-----------------------------------------------------------
Передача значений по ссылке
Пример ниже :

const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(persone) {
    person.age += 1                                 функция мутирует внешний объект
    return person
}

increasePersonAge(personOne) - передача объекта по ссылке
console.log(personeOne.age) - 22


ВНУТРИ ФУНКЦИИ НЕ РЕКОМЕНДУЕТСЯ МУТИРОВАТЬ ВНЕШНИЕ ОБЪЕКТЫ !!!

КАК ИЗБЕЖАТЬ ЭТОГО ?

ПРИМЕР:

const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(persone) {
    const updatedPerson = Object.assign({}, person)
    person.age += 1                               
    return upDatedPerson
}

const updatedPersonOne = increasePersonAge(personOne)
console.log(personeOne.age) - 21
console.log(updatedPersonOne.age) - 22
-----------------------------------------------------------
КОЛБЭК ФУНКЦИИ

function anotherFunction() {
    //действия...
}

function fnWithCallback(callbackFunction) {
    callbackFunction()                          в теле этой функции вызывается колбэк функуция
}

fnWithCallback(anotherFunction)

Пример:

// function printMyName() {
//     console.log('Daniel')
// }
// setTimeout(printMyName, 1000) //функция printMyName будет вызвана через 1000 милисекунд
-----------------------------------------------------------
ПРАВИЛА РАБОТЫ С ФУНКЦИЯМИ

1. Называть функции исходя из выполняемых задач.
2. Одна функция должна выполнять одну задачу.
3. Не рекомендуется изменять внешние относительно функции переменные.
*/
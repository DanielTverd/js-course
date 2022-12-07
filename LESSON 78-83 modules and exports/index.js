/*
МОДУЛИ

Модули позволяют структурировать код!
Модули позволяют избегать дублирования блоков кода!

EXPORT/IMPORT синтаксис появился в ES6!

примеры:

moduleOne.js

const myName = () => {
    console.log('Daniel')
}
export default myName

moduleTwo.js

import printMyName from './moduleOne.js'        //Названия переменных могут не совпадать
printMyName() //Daniel
-------------------------------------------------
Создание и запуск модулей с помощью Node
пример:

moduleOne.mjs

const sum = (a, b) => a + b
export default sum

moduleTwo.mjs

import sum from './moduleOne.mjs'
const res1 = sum(10, 2)
console.log(res1)

пример2:

moduleOne.mjs

const sum = (a, b) => a + b
export default sum

moduleTwo.mjs

import sumNumbers from './moduleOne.mjs'
const res = sumNumbers(10, 2)
console.log(res)
*/
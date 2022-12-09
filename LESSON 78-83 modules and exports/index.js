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
//12

пример2:

moduleOne.mjs

const sum = (a, b) => a + b
export default sum

moduleTwo.mjs

import sumNumbers from './moduleOne.mjs'
const res = sumNumbers(10, 2)
console.log(res)
//12
-------------------------------------------------
Несколько экспортов
пример:

moduleOne.js

const one = 1
const two = 'two'
export {
    one,
    two
}

moduleTwo.js

import {
    one,
    two
} from './moduleOne.js'
console.log(one)//1
console.log(two)//'two'

Переименование импортов
пример:

moduleOne.js

const one = 1
const two = 'two'
export {
    one,
    two
}

moduleTwo.js

import {
    one as oneRenamed,
    two
} from './moduleOne.js'
console.log(oneRenamed)//1
console.log(two)//'two'

Node.Js поддерживает ES6 модули, начиная с версии 13
-------------------------------------------------
Правила работы с модулями

1. Модули должны быть одноцелевыми.
2. Распологайте все export инструкции внизу файла.
3. Распологайте все import инструкции сверху файла.
4. По возможности используйте export default.
*/
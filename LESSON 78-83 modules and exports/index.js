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


*/
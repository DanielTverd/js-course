/*
Массивы

Массив -- это объект с цифровыми именами свойств !!!

Примеры создания массивов:

const myArray = [1, 2, 3]
console.log(myArray)
// [1, 2, 3]

const myArray = new Array (1, 2, 3)
console.log(myArray2)
// [1, 2, 3]

Структура массива -- объект

(3) [1, 2, 3]
0: 1
1: 2
2: 3
length: 3
------------------------------------------------------------------------------------------------------
Оператор сравнения для массивов и объектов

const myArray = [1, true, 'Daniel']
myArray

const myArray2 = [1, true, 'Daniel']
myArray2

myArray === myArray2 //false (это объекты, они ссылаются на разные места в памяти где хранятся массивы!)

const myArray3 = myArray
myArray === myArray3 //true (сейчас они ссылаются на один и тот же объект)
------------------------------------------------------------------------------------------------------
Массив против Объекта

ОБЪЕКТ :

const myObject = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
}
console.log(myObject) //{0: 1, 1: 2, 2: 3, length: 3}

МАССИВ :

const myArray = [1, 2, 3]
console.log(myArray) //[1, 2, 3]
------------------------------------------------------------------------------------------------------
Как работать с элементами массива

Чтение значений массива:

const myArray = [1, true, 'a']
console.log(myArray) //[1, true, 'a']

console.log(myArray[0]) //1
console.log(myArray[1]) //true

console.log(myArray.length) //3

*/

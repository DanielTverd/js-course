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

Длина массива:

const myArray = [1, 2, 3, 4]
console.log(myArray) //[1, 2, 3, 4]
console.log(myArray.length) //4

myArray[2] = 'abc'

console.log(myArray) //[1, 2, 'abc', 4]
console.log(myArray[2]) //'abc'

myArray[4] = true

console.log(myArray) //[1, 2, 'abc', 4, true]
console.log(myArray.length) //5
------------------------------------------------------------------------------------------------------
Методы массивов
(Функции прототипов (высшего порядка))
Примеры ниже (основные)

push
pop
shift
unshift
forEach
map
////////////////
PUSH пример:
Это добавление нового элемента в массив
const myArray = [1, 2, 3]
console.log(myArray)//[1, 2, 3]
myArray.push(4)
console.log(myArray)//[1, 2, 3, 4]
myArray.push(true)
console.log(myArray)//[1, 2, 3, 4, true]
////////////////
POP пример:
удаление последнего элемента в массиве
const myArray = [1, 2, 3]
console.log(myArray)//[1, 2, 3]
myArray.pop()
console.log(myArray)//[1, 2]

const removedElement = myArray.pop()
console.log(myArray)//[1]
console.log(removedElement)//2
////////////////
Unshift пример:
добавить элемент в начале массива
const myArray = [1, 2, 3]
console.log(myArray)//[1, 2, 3]
myArray.unshift(true)
console.log(myArray)//[true, 1, 2, 3]
myArray.unshift('abc')
console.log(myArray)//['abc', true, 1, 2, 3]
////////////////
SHIFT пример:
этот элемент удаляет первый элемент в массиве
const myArray = [1, 2, 3]
console.log(myArray)//[1, 2, 3]
myArray.shift()
console.log(myArray)//[2, 3]
const removedElement = myArray.shift()
console.log(myArray)//[3]
console.log(removedElement)//2

VV
*/

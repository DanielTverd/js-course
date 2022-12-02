/*
ЦИКЛЫ
Для чего нужны?

Пример:
let i = 0
console.log(i)      повторяющиеся   (выражения-инструкция)
i++                 действия
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++

Перебор всех элементов массива БЕЗ цикла
Пример:

const myArray = [true, 'abc', 10]
console.log(myArray[0]) //Действия с каждым элементом массива
console.log(myArray[1])
console.log(myArray[2])

Перебор всех свойств объекта БЕЗ цикла
Пример:

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}
console.log(myObject.x) //Действия с каждым свойством объекта
console.log(myObject.y)
console.log(myObject.z)

ТИПЫ ЦИКЛОВ:
for 
for...in...
while
do...while
for...of...
-----------------------------------------
ЦИКЛ for --- инструкции!!!

пример:

for (Начальная инструкция; Условие; Итерационное действие) {        три исходных инструкции
    //блок кода, выполняемый на каждой итерации
}

пример:

for (let i = 0; i < 5; i++) {
    console.log(i)
}
-----------------------------------------
Для переборов массива НЕ НУЖЕН for!

Циклы можно использовать для массивов - но НЕ РЕКОМЕНДУЕТСЯ!
Использовать лучше функции высшего порядка массивов - "forEach", "map", "reduce"

Цикл for для массивов:

const myArray = ['first', 'second', 'third']
for (let = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}
//'first'
//'second'
//'third'

Лучше использовать метод массивов forEach:

const myArray = ['first', 'second', 'third']
myArray.forEach((element, index) => {
    console.log(element, index)
})
//'first' 0
//'second' 1
//'third' 2
-----------------------------------------
ЦИКЛ while

пример:

while (Условие) {   
    //Блок кода, выполняемый на каждой итерации
    //Цикл выполняется пока условие правдиво
    //Так же он может быть ни разу не выполнен если условие ложно!
}

пример:

let i = 0
while (i < 5) {
    console.log(i)
    i++
}
-----------------------------------------
ЦИКЛ do while

пример:

do {
    //Блок кода, выполняемый на каждой итерации
    //Такой блок кода выполняется хотя бы один раз!
} while (Условие)

пример 1:

let i = 0
do {
    console.log(i)
    i++
} while (i < 5)

пример 2:

let i = 10
do {
    console.log(i)
    i++
} while (i < 5)
//Напичатает 10 в консоль, увеличим на 1, получится 11, но 11 не меньше 5 (Условие ложное) и мы выходим из цикла! 
//но этот цикл выполнился 1 раз, и результат его это число 10!
-----------------------------------------
ЦИКЛ for in

пример:

for (key in Object) {
    //Действия с каждым свойством объекта
    //Значения свойства - Object[key]
    //Блок инструкций (Выполняется для каждого свойства объекта)
}

пример:

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}
for (const key in myObject) {
    console.log(key, myObject[key])
}
//x 10
//y true
//z abc
-----------------------------------------
Методы keys и values для объектов

пример:

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}
Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})
*/
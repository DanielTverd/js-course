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

*/
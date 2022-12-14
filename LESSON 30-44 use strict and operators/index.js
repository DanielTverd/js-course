/*
----------------------------------------------------
СТРОГИЙ РЕЖИМ -- USE STRICT

'use strict' - это инструкция js , чтобы анализировать мой код более пристольно !!!

Пример : 

'use strict'

function myFn() {
    a = true -- ERROR (запрещает использование необъявленных переменных)
    console.log(a)
}
myFn()
console.log(a)
----------------------------------------------------
ОПЕРАТОРЫ

Операторы - это встроенная в JS функция ! 

Бывают : 

Арифметические (+, -, *, /)
Сравнения (===, !==, <=, >=)
Логические (!, &&, ||)
Присваивание (=)

Еще бывают 

Текстовые (typeof, instanceof, new, delete)
----------------------------------------------------
Оператор присваивания

У оператора присваивания есть два операнда 
пример снизу 
a = 10 -- где a и 10 это операнды (левый и правый)

Выглядит так :

function =(переменная, выражение) {         -- "=" внутренняя функция
    1.Получение результата выражения
    2.Поиск переменной по имени
    3.Присваивание результата выражения переменной
    4.Возврат результата выражения
}
----------------------------------------------------
Унарные и бинарные операторы

У унарных операторов всегда один операнд (аргумент)
Примеры :
a++
+a
delete obj.a
typeof a
new Object()

У бинарных операторов два операнда (аргумента)
Примеры :
a = 5
a + b
a += 5
a === b
a && b
----------------------------------------------------
Форматы записи операторов

Инфиксный формат: (оператор между операндами)
Примеры:
a = true
a + b
a += 5
a || b
a > b

Префиксная запись: (оператор стоит ПЕРЕД операндом)
++a
delete obj.a
typeof a

Постфиксная запись: (оператор стоит ЗА операндом)
a++
myFunction()
----------------------------------------------------
Приоритетность операторов
Пример: 

a + b * c / d - e
Тут приоритетность понятная (как в школе учили, НО если я хочу поменять приоритетность - стоит добавить скобки!!!)
a + ((b * c) / (d - e))
----------------------------------------------------
Логические операторы

! (не) -- префиксный оператор -- (всегда возвращает значение типа boolean)
&& (и) -- бинарный оператор -- (возвращает значение одного из операндов)
|| (или) -- бинарный оператор -- (возвращает значение одного из операндов)
----------------------------------------------------
Ложные значения
Это те, которые при приведении к логическому типу (boolean), дают значение false :
false
0
''
undefined
null
----------------------------------------------------
Практика с typeof оператором
typeof -- унарный , префиксный оператор

// typeof 10
// 'number'
// typeof ''
// 'string'
// typeof 10 === 'number'
// true
// typeof alert
// 'function'
// let isUndefined
// undefined
// typeof isUndefined === 'undefined'
// true
----------------------------------------------------
Оператор НЕ

Оператор ! (не) чаще всего используется в условных инструкциях.
Примеры :

!10 //false
!0 //true
!'abc' //false
!'' //true
!true //false
!undefined //true

Существует знак отрицания отрицания !! 
Примеры :

!!10 //true
!!0 //false
!!'abc' //true
!!'' //false
!!true //true
!!undefined //false
----------------------------------------------------
Оператор короткого замыкания И (&&)
Пример :

Выражение 1 && Выражение 2

Если выражение 1 ложно, то :
1. Выражение 2 игнорируется 
2. Возвращается результат "Выражение 1"
----------------------------------------------------
Оператор короткого замыкания ИЛИ (||)
Пример :

Выражение 1 || Выражение 2

Если выражение 1 истинно, то :
1. Выражение 2 игнорируется 
2. Возвращается результат "Выражение 1"
----------------------------------------------------
Трюк с оператором И и вызовом функции

let b = 10 //undefined
b && console.log('Выполнення')
let c //undefined
c && console.log('Выполнення')
----------------------------------------------------
Цепочки выражений с операторами И и ИЛИ

Цепочка операторов && и ||

a && b && c && d
a || b || c || d
----------------------------------------------------
Оператор разделения объекта на свойства (...) -- три точки
Пример :

const button = {
    width: 200,
    text: 'Buy'
}
const redButton = {
    ...button,
    color: 'red'            //если у объекта "button" есть свойство "color", его значение будет перезаписано
}
console.table(redButton)

Объединение объектов с помощью ...
Пример ниже

const buttonInfo = {
    text: 'Buy'
}
const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}
const button = {
    ...buttonInfo
    ...buttonStyle
}
console.table(button)
----------------------------------------------------

*/
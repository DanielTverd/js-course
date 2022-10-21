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

----------------------------------------------------

*/
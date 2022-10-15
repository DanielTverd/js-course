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
*/
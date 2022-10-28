/*
--------------------------------------------------
ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ

ОБЪЯВЛЕННАЯ ФУНКЦИЯ(1) & ФУНКЦИОНАЛЬНОЕ ВЫРАЖЕНИЕ(2) 
(1)
function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

(2)
function(a, b) {
    let c 
    a = a + 1
    c = a + b
    return c
}

РАЗНИЦА В ТОМ, ЧТО В ФУНКЦИОНАЛЬНОМ ВЫРАЖЕНИИ НЕТ ИМЕНИ ФУНКЦИИ !!! (тело функции не отличается, как и возвращение)

Присваивание функционального выражения переменной, пример ниже :

const myFunction = function(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
myFunction(5, 3) //9

Функциональное выражение в вызове другой функции :

setTimeout(function() {
    console.log('Отложенное сообщение')
}, 1000)
// 'Отложенное сообщение' будет выведено в течении 10000 милисикунды (1 сек)
*/
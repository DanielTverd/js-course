/*
Условные инструкции
пример:
if
if...else
switch
тернарный оператор
------------------
Инструкция if
if (Условие) {
    //блок кода, выполняемый однократно, если Условие правдиво
}

ПРИМЕР:

let val = 10
if (val > 5) {
    val += 20
}
console.log(val)//30

Пример if с оператором отрицания

const person = {
    age: 20
}
if (!person.name) {             !undefined === true
    console.log('Имя не указано')
    //Другие действия в случае, если свойства "name" у объекта "person" нету
}
------------------

*/
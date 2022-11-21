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
Инструкция if...else
if (Условие) {
    //блок кода, выполняемый однократно, если Условие правдиво
} else {
    //блок кода, выполняемый однократно, если Условие ложно
}

ПРИМЕР:

let val = 10
if (val < 5) {
    val += 20
} else {
    val -= 20
}
console.log(val) //-10
------------------
Инструкция if...else...if
if (Условие 1) {
    //блок кода, выполняемый однократно, если Условие 1 правдиво
} else if (Условие 2){
    //блок кода, выполняемый однократно, если Условие 2 правдиво
} else {
    //блок кода, выполняемый однократно, если предыдущие условия ложны
}

Предпочтительный пормат if
if (Условие 1) {
    //блок кода, выполняемый однократно, если Условие 1 правдиво
} 
if (Условие 2) {
    //блок кода, выполняемый однократно, если Условие 2 правдиво
}
if (Условие 3) {
    //блок кода, выполняемый однократно, если Условие 3 правдиво
}

const age = 25

if (age >= 18) {
    console.log('Is adult')
} else if (age >= 12 && age < 18) {
    console.log('Is teenager')
} else {
    console.log('Is child')
}

const age = 25

if (age > 18) {
    console.log('Is adult')
}
if (age >= 12) {
    console.log('Is teenager')
} 
if (age < 12) {
    console.log('Is child')
}
//Is adult
//Is teenage
------------------
Использование if в функциях

const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a namber'
    }
    if (a <= 0 || b <= 0) {
        return 'Nambers are not positive'
    }
    return a + b
}
*/
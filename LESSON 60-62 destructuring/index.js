/*
ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
пример:

const userProfile = {
    name: 'Daniel',
    commentsQty: 20,
    hasSignedAgreement: false
}

const { name, commentsQty } = userProfile       объявление новых переменных и присваивание значений на основе значений свойств объекта
const { hasSignedAgreement } = userProfile

console.log(name)//Daniel
console.log(commentsQty)//20
-------------------------------------------------------------------------------------------------------------------------------
ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ
пример:

const fruits = ['Apple', 'Banana']      
const [fruitOne, fruitTwo] = fruits     объявление новых переменных и присваивание значений на основе эдементов массива

console.log(fruitOne)//Apple
console.log(fruitTwo)//Banana
-------------------------------------------------------------------------------------------------------------------------------
ДЕСТРУКТУРИЗАЦИЯ ПАРАМЕТРОВ ФУНКЦИИ
пример:

const userProfile = {
    name: 'Daniel',
    commentsQty: 20,
    hasSignedAgreement: false
}

const userInfo = ({ name, commentsQty}) => {        деструктуризация параметров функции
    if (!commentsQty) {
        return `User ${name} has ${commentsQty} comments`
    }
    return `User ${name} has ${commentsQty} comments`
}

userInfo(userProfile) // User Daniel has 20 comments
*/
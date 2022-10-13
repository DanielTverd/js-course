/* 
Динамическая типизация 

let a = 'abc' - (string)
    a = 15 - (number)
    a = true - (boolean)

JavaScript - динамически типизируемый язык программирования 

САМОЕ ВАЖНОЕ - ИСПОЛЬЗОВАТЬ CONST ВЕЗДЕ ГДЕ ВОЗМОЖНО !!!


// function a () {
//     console.log('Hey there')
// }

// a()

// a = 10

// a()
--------------------------------------------------------------------
ОБЪЕКТЫ 

Практически все сущности в JS это объекты !!!

Получение значения из объекта 

const myCity = {
    city: 'New York',
    popular: true,
    country: 'USA'
}
console.log(myCity.city) - 'New York'
console.log(myCity.popular) - true 

Менять значение в объекте просто : 

const myCity = {
    city: 'New York'
}
myCity.city = 'Las Vegas'
console.log(myCity) - 'Las Vegas'
-------------------------------------------------------------------
Создание и удаление свойств объектов 

Добавление новых свойств : 

const myCity = {
    city: 'New York'
}
myCity.popular = true
console.log(myCity) - {city: 'New York' , popular: true}
myCity.country = 'USA'
console.log(myCity) - {city: 'New York' , popular: true , country: 'USA'}

Удаление свойств объекта : 

const myCity = {
    city: 'New York',
    popular: true,
    country = 'USA'
}
delete myCity.country
console.log(myCity) - {city: 'New York' , popular: true}

Доступ к значению свойств с использованием скобок :

const myCity = {
    city: 'New York'
}
myCity['popular'] = true
console.log(myCity) - {city: 'New York' , popular: true}

const countryPropertyName = 'country'
myCity[countryPropertyName] = 'USA'
console.log(myCity) - {city: 'New York' , popular: true , country: 'USA'}
-------------------------------------------------------------------
Вложенные свойства 

пример :

const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}
console.log(myCity.info.isPopular) - true
delete myCity.info['isPopular']
console.log(myCity) - {city: 'New York', info: {country: 'USA'}}
-------------------------------------------------------------------
Сокращенный формат записи свойств

Пример : 

const name = 'Daniel'
const postsQty = 23
const userProfile = {
    name: name,
    postsQty: postsQty,
    hasSignedAgreement: false
}

Сокращенный формат записи свойств :

const name = 'Daniel'
const postsQty = 23
const userProfile = {
    name,
    postsQty,
    hasSignedAgreement: false
}

Сокращенные свойства рекомендуется размещать в начале объекта 
-------------------------------------------------------------------
Глобальные переменные (объекты)

window - веб браузер

global - node.js

Чтобы не путатся решили создать унифицированный глобальный объект :

globalThis ! 
*/
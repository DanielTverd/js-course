/*
МЕТОД forEach
Это очень популярный метод массива. С помощью которого можно перебрать все элементы массива. И выполнить
определённые действия с этими массивами. 
Пример:

const myArray = [1, 2, 3]
console.log(myArray)//[1, 2, 3]

myArray.forEach(el => console.log(el * 2)) //2, 4, 6
console.log(myArray)//[1, 2, 3] -- оригинальный массив не изменился.
----------------------------------------------------------------------------------------------------------
МЕТОД map
Это очень популярный метод массива. Ожидает кол-бэк функцию в качестве аргумента. НО, map возвращает новый массив! 
Этот метот как и в forEach, переберает все элементы массива, и вызывает кол-бэк функцию определённое количество раз.
Пример:

const myArray = [1, 2, 3]
console.log(myArray)//[1, 2, 3]

const newArray = myArray.map(el => el * 3)

console.log(newArray)//[3, 6, 9]
console.log(myArray)//[1, 2, 3] -- оригинальный массив не изменился.
*/ 
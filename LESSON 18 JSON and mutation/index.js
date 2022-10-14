/*
-----------------------------------------------------
JSON - JavaScript object notation
Это формат обмена данными
Пример:
{
    "userId": 1,
    "id": 1,
    "title": "Test title",
    "status": {
        "completed": false
    }
}

Передача данных в формате JSON - передаётся в виде строки

{"userId":1,"id":1,"title":"Test title","status":{"completed":false}}

Конвертация JSON в JS объект

Есть метод - JSON.parse() - получив JSON в формате строки из сервера могу передать 
его как аргумент в вызове метода парс (parse) и в результате получу JS объект.  

Конвертация JS объекта в JSON

Есть метод - JSON.stringify() - переводит JS объект в JSON. 


// const post = {
//     title: 'My post',
//     likesQty: 5
// }
// JSON.stringify(post)

// const postStringified = JSON.stringify(post)
// JSON.parse(postStringified)
-----------------------------------------------------
*/

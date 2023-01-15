/*
Введение в классы и прототипы

Синтаксис классов в ES6:
class...

КЛАССОВ ДО ES6 В JS НЕ БЫЛО! ОН ЖЕ НЕ ООП. 

Классы позволяют создавать прототипы для объектов.
На основании прототипов создаются экземпляры.
Экземпляры могут иметь собственные свойства и методы.
Экземпляры наследуют свойства и методы прототипов.
-----------------------------------------
Пример класса

class Comment {
    constructor(text) {
        this.text = text        переменная this указывает на эклемпляр класса
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
}
-----------------------------------------
Создание экземпляров класса

class Comment {
    constructor(text) {
        this.text = text  
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment')       вызывается функция constructor (создание экземпляра)

после создания появляются у переменной свои свойства экземпляра

const firstComment = new Comment('First comment')
console.log(firstComment)

Наследование по цепочке

наследует:
все методы класса коментарий
все методы класса объекта
-----------------------------------------
------------------------

*/
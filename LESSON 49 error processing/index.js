/*
Обработка ошибок

Что происходит в случае ошибок ?

const fnWithError = () => {
    throw new Error('Some error')           
}
fnWithError()                   выполнение кода остановится после появления Uncaught ошибки
console.log('Continue...')

РЕШЕНИЕ ТАКИХ ПРОБЛЕМ ? НИЖЕ

TRY/CATCH

try{
    // выполнение блока кода
} catch (error) {
    // этот блок выполняется в случае возникновения ошибок в блоке try
}

Пример

const fnWithError = () => {
    throw new Error('Some error')           
}
try{
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}
console.log('Continue...')
*/
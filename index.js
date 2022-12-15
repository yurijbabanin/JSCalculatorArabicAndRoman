function calculator(string) {

    let arr = string.split(' ')
    let num1 = arr[0]
    let num2 = arr[2]
    let symbol = arr[1]
    // try {
    //  console.log(typeof num1 + ' и ' + typeof num2)
    const arabic = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 19, 20, 25, 40, 50, 90, 100]
    const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'IX', 'X', 'XI', 'XIX', 'XX', 'XXV', 'XL', 'L', 'XC', 'C']

    switch (string.length>8) {
        case (true):
            throw new Error('Слишком длинное вырожение')
            break
    }


    let forValidNUm1 = roman.findIndex(item => item === num1)
    let forValidNUm2 = roman.findIndex(item => item == num2)
    switch (num1 > 10 || num2 >10 || num1 <= 0 || num2 <= 0 || arabic[forValidNUm1] > 10 || arabic[forValidNUm2] > 10){
        case (true):
            throw new Error('Введены переменные больше 10 или меньше 1')
            break
    }

    switch (arabic[forValidNUm1] == undefined && arabic[forValidNUm2] != undefined){
        case (true):
            throw new Error('Введены переменные в разных форматах')
            break
    }
    switch (arabic[forValidNUm1] != undefined && arabic[forValidNUm2] == undefined){
        case (true):
            throw new Error('Введены переменные в разных форматах')
            break
    }
    switch (symbol === '/' && num2 == '0'){
        case (true):
            throw new Error('Деление на ноль невозможно')
            break
    }



    // Для отладки
    //   console.log('Знак: '+symbol)
    //   console.log('Первое число: '+num1)
    //   console.log('Второе число: '+num2)





    // console.log('Введено 1: '+num1 + ' ' + typeof num1)
    // console.log('Введено 2: '+num2 + ' ' + typeof num2)
    // console.log('Выполнится ли условия проверки для num1: '+ 'Искомое значение: '+ num1 + ' типа ' + typeof num1+ ' Итого: ' + roman.includes(num1))
    if(true == roman.includes(num1) && true == roman.includes(num1)){
        let getNum1RomIndex = roman.findIndex(item => item == num1)
        let getNum2RomIndex = roman.findIndex(item => item == num2)


        if (symbol == '+') {
            let res = arabic[getNum1RomIndex] + arabic[getNum2RomIndex]

            if (true == arabic.includes(res)){
                let resGetRomIndex = arabic.findIndex(item => item == res)
                if (res > 0){
                    return roman[arabic.indexOf(res)]
                }else{
                    return ''
                }
            }else{
                return 'Не найдено число в матрице'
            }


        } else if (symbol == '-'){
            let res = arabic[getNum1RomIndex] - arabic[getNum2RomIndex]
            if (true == arabic.includes(res) || res <= 0){
                let resGetRomIndex = arabic.findIndex(item => item == res)
                if (res > 0){
                    return roman[arabic.indexOf(res)]
                }else{
                    return ''
                }
            }else{
                return 'Не найдено число в матрице'
            }


        } else if (symbol == '*'){
            let res = arabic[getNum1RomIndex] * arabic[getNum2RomIndex]
            if (true == arabic.includes(res)){
                let resGetRomIndex = arabic.findIndex(item => item == res)
                if (res > 0){
                    return roman[arabic.indexOf(res)]
                }else{
                    return ''
                }
            }else{
                return 'Не найдено число в матрице'
            }

        } else if (symbol == '/'){
            let res = Math.floor(arabic[getNum1RomIndex] / arabic[getNum2RomIndex])
            if (true == arabic.includes(res) || res <= 0){
                let resGetRomIndex = arabic.findIndex(item => item == res)

                if (res > 0){
                    return roman[arabic.indexOf(res)]
                }else{
                    return ''
                }
            }else{
                return 'Не найдено число в матрице'
            }

        }else {
            throw Error ('Error')
        }

    }else {
        if (symbol == '+') {
            let res = (parseInt(num1) + parseInt(num2))
            let resS = res.toString()
            return resS
        } else if (symbol == '-'){
            let res = (num1 - num2)
            let resS = res.toString()
            return resS

        } else if (symbol == '*'){
            let res = (num1 * num2)
            let resS = res.toString()
            return resS

        } else if (symbol == '/'){
            let res = Math.floor(num1 / num2)
            let resS = res.toString()
            return resS

        }else {
            throw Error ('Error')
        }
    }
    // return res
}


console.log('Функция выводит: '+calculator('0 + 1'))
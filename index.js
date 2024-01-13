//1) Напиши функцію отриманняКрайовихЕлементів(масив), яка приймає один параметр - масив елементів будь - якої довжини.Функція повинна повертати масив із двох елементів - першого та останнього елемента параметра масив.

//

function getElements(elem) {
    let result = []
    for (let i = 0; i < elem.length; i++) {
        console.log(elem[i])
        if (i === 0){
            result.push(elem[i])
        }
        if (i === elem.length - 1){
            result.push(elem[i])
        }
        
    }
    return result
}

let one = [3]



console.log(getElements(one))


// 2)Напиши функцію includes(масив, значення), яка виконує те саме, що і метод масиву масив.includes(значення) - перевіряє, чи є у масиві масив значення value, повертаючи true, якщо таке значення є, та false у протилежному випадку.

function include(array, value){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (array[i] === value) {
            return true
        }
    };
    return false;
}

let arr = ["hello", 234 , 4 , 5]

console.log(include(arr, "Hello"))
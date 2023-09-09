const first = document.querySelector('.first_number')
const second = document.querySelector('.second_number')

const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const um = document.querySelector('.um')
const del = document.querySelector('.del')

const btn_res = document.querySelector('.btn_result')
const result = document.querySelector('.result')

let action = '+'

plus.onclick = function () {
    action = '+'
}
minus.onclick = function () {
    action = '-'
}
um.onclick = function () {
    action = '*'
}
del.onclick = function () {
    action = '/'
}

function printResult(sum) {
    if(sum < 0){
        result.style.color = 'red'
    }if(sum > 0){
        result.style.color = 'green'
    }if(sum == 0){
        result.style.color = 'yellow'
    }
    result.textContent = sum
}

btn_res.onclick = function () {

    if (action === '+') {
        const sum = Number(first.value) + Number(second.value)
        printResult(sum)
    }if(action === '-'){
        const sum = Number(first.value) - Number(second.value)
        printResult(sum)
    }if(action === '*'){
        const sum = Number(first.value) * Number(second.value)
        printResult(sum)
    }if(action === '/'){
        const sum = Number(first.value) / Number(second.value)
        printResult(sum)
    }
    
}
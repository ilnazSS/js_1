let qq = confirm('Вы робот?')
if(qq == false){

let price = Number(prompt('Введите стоимость товара'))
let money = Number(prompt('Введите кол-во денег'))

let forbox = document.querySelector('.box')

if (price == money) {
    let st = 'Покупка совершенa'
    forbox.style.background = 'green'
    forbox.style.padding = '10px'
    forbox.style.borderRadius = '30px'
    forbox.innerHTML = st
}if(money > price) {
    sd = money - price
    let st = ('Ваша сдача - ' + sd + ' рублей')
    forbox.style.background = 'yellow'
    forbox.style.padding = '10px'
    forbox.style.borderRadius = '30px'
    forbox.innerHTML = st
}
if(money < price) {
    sd = price - money
    let st = ('Вам не хватает ' + sd + ' рублей')
    forbox.style.background = 'red'
    forbox.style.padding = '10px'
    forbox.style.borderRadius = '30px'
    forbox.innerHTML = st
}
    

}else{
    st = 'Извините, вы робот('
    forbox.style.background = 'brown'
    forbox.style.padding = '10px'
    forbox.style.borderRadius = '30px'
    forbox.innerHTML = st
}

// let logo = console.log(document.querySelector('.logo'))
// console.log(logo)

// let link = console.log(document.querySelectorAll('.link'))
// console.log(link)

// let email_js = document.getElementById('email')
// console.log(email_js)

// logo.style.background = 'red'
// logo.style.padding = '10px'
// logo.style.borderRadius = '10px'

// let textarea = document.getElementById('.textarea')
// textarea.textContent


// let forbox = document.querySelector('.forbox')
// forbox.innerHTML = st

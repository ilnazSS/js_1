// let i = 3

// while (i > 0) {
//     alert(i)
//     i--
// }

// for(let i = 0; i<5; i++){
//     alert(i)
// }

let input = prompt('Введите значение')

const blocks = document.querySelector('.blocks')
let box ='<div class="box"></div>'

for (let number = 0; number < input; number++) {
    let box ='<div class="box"></div>'
    blocks.insertAdjacentHTML('beforeend', box)
}                                           
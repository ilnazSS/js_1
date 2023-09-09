let y = Number(prompt('Сколько блоков будет на сайте?'))

// y++

for (let x = 0; x < y; x++ ){
    let forbox = document.querySelector('.container')
    forbox.style.borderRadius = '30px'
    forbox.style.Color = 'red'
    forbox.innerHTML = x
}

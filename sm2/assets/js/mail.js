
let city = prompt('Введите город')
let bird = Number(prompt('Введите год основания'))
let person = Number(prompt('Введите кол-во населения'))

let year = 2023 - bird

let text = ('Городу ' + city + ' исполнилось ' + year + ' лет с момента его образования. Население - ' + person + ' человек')
alert(text)
alert('Успех!')
let news = [
    // {
    //     id: 1,
    //     name: 'Новость 1',
    //     // text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor necessitatibus voluptatibus unde delectus, in aliquid officia nesciunt maiores fugit qui aut beatae provident quisquam blanditiis, at sit, ab commodi?',
    //     author: 'Пользователь 1',
    //     date: '21/01/2011'

    // },
    // {
    //     id: 2,
    //     name: 'Новость 2',
    //     // text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor necessitatibus voluptatibus unde delectus, in aliquid officia nesciunt maiores fugit qui aut beatae provident quisquam blanditiis, at sit, ab commodi?',
    //     author: 'Пользователь 2',
    //     date: '21/01/2011'

    // }
]
// console.log(news)
let isError = false;
let isError2 = false;

let form = document.querySelector('.formContainer')

let erorr2 = document.querySelector('.error2')
let erorr1 = document.querySelector('.error1')

let inputTitle = document.querySelector('.titlee')

let inputDate = document.querySelector('.date')

const now = 2023 - Number(inputDate.value)
console.log(inputTitle)
console.log(inputDate)
// let inputArea = document.getElementById('area')
let submitAdd = document.getElementById('submitAdd')

let newsPlace = document.querySelector('.news')

submitAdd.addEventListener('click', addArray)

// function showLink(x){
//     console.log('link' + x)
// }

inputTitle.addEventListener('keyup', function(){
    if(inputTitle.value == ''){
        inputTitle.style.border = '3px solid red'
        erorr2.innerHTML = 'Заполните поле<br>'
        isError = false
    }
    if(inputTitle.value.length < 2){
        inputTitle.style.border = '3px solid red'
        erorr2.innerHTML = 'Не менее 2-х символов<br>'
        isError = false
    }else{
        inputTitle.style.border = '3px solid green'
        erorr2.innerHTML = ''
        isError = true
    }
    console.log(isError)
    if(isError == false){
        submitAdd.setAttribute("disabled", "disabled")
    }else{
        submitAdd.removeAttribute("disabled", "disabled")
    }

})
inputDate.addEventListener('keyup', function(){
    if(inputDate.value == '' ){
        inputDate.style.border = '3px solid red'
        erorr1.innerHTML = 'Заполните поле'
        isError2 = false
    }
    if(inputDate.value.length === 4 ){
        inputDate.style.border = '3px solid green'
        erorr1.innerHTML = ''
        isError2 = true
    }else{
        inputDate.style.border = '3px solid red'
        erorr1.innerHTML = 'Не менее и не более 4-х символов<br>'
        isError2 = false
    }
    console.log(isError2)
    if(isError2 == false){
        submitAdd.setAttribute("disabled", "disabled")
    }else{
        submitAdd.removeAttribute("disabled", "disabled")
    }

})
// form.addEventListener('submit', function(event){
//     event.preventDefault()
// })
    
if(now > 18){
    showNews(news)
}else{
    showERNews()
}
function addArray(){
    let object = {
        id: 3,
        name: inputTitle.value,
        // text: inputArea.value,
        author: 'Ilnaz',
        date: now
    }
    console.log(object)
    news.push(object)   
    newsPlace.innerHTML = ''
    inputTitle.value = ''
    // inputArea.value = ''
    inputDate.value = ''
    if(now > 18){
        showNews(news)
    }else{
        showERNews()
    }
}
function showNews(){
    console.log(now)
    news.forEach(y => {
    newsPlace.insertAdjacentHTML('beforeend', `
    <div class="new">
        <div class="title">
            <h2 class="new_title">Имя пользователя - ${y.name}</h2>
        </div>
        <div class="footer">
            <h4 class="new_name">Пользователю ${y.date} лет <br> <a href="https://learn.z-go.ru/index.php?">Ссылка на паутину</a></h4>
            <p class="new_id">id:${y.id}</p>
        </div>
    </div>
    `)
})
}
function showERNews(){
    news.forEach(y => {
    newsPlace.insertAdjacentHTML('beforeend', `
    <div class="new">
        <div class="title">
            <h2 class="new_title">Ошибка</h2>
        </div>
        <div class="footer">
            <h4 class="new_name"></h4>
            <p class="new_id"></p>
        </div>
    </div>
    `)
})
}
if(isError == false){
    submitAdd.setAttribute("disabled", "disabled")
}
let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

document.addEventListener('keydown', function(event){
    if(event.key.toLowerCase() == 'b'){
        let body = document.querySelector('.body')
        body.style.background = 'black'
    }
})
document.addEventListener('keyup', function(event){
    if(event.key.toLowerCase() == 'b'){
        let body = document.querySelector('.body')
        body.style.background = 'white'
    }
})
document.addEventListener('keydown', function(event){
    if(event.key.toLowerCase() == 'w'){
        let body = document.querySelector('.body')
        body.style.background = 'white'
    }
})
document.addEventListener('keyup', function(event){
    if(event.key.toLowerCase() == 'w'){
        let body = document.querySelector('.body')
        body.style.background = 'white'
    }
})


let news = []
let isError = false;
let isError1 = false;
let isError2 = false;
let isError21 = false;

let form = document.querySelector('.form')

let body = document.querySelector('.body')

let error = document.querySelector('.error')
let error1 = document.querySelector('.error1')
let error2 = document.querySelector('.error2')
let error21 = document.querySelector('.error21')

let inputTitle = document.querySelector('.form-elem')
let inputDate = document.querySelector('.form-elem-textarea')

// let s = inputDate.value

let submitAdd = document.querySelector('.send')
let newsPlace = document.querySelector('.wrapper-new-wrapper')



submitAdd.addEventListener('click', () => {
    modal.classList.remove('modal_active')
    addArray()
})

if(isError21 == false || isError1 == false){
    submitAdd.setAttribute("disabled", "disabled")
}

inputTitle.addEventListener('keyup', function(){
    
    if(!inputTitle.value){
        inputTitle.style.border = '3px solid red'
        error21.innerHTML = 'Заполните поле<br>'
        isError21 = false
    }else{
        isError21 = true
        error21.innerHTML = ''
    }
    if(inputTitle.value.length < 8){
        inputTitle.style.border = '3px solid red'
        error2.innerHTML = 'Не менее 8ми символов<br>'
        isError2 = false
    }else{
        inputTitle.style.border = '3px solid green'
        error2.innerHTML = ''   
        isError2 = true
    }
    if(isError2 == false || isError21 == false || isError == false || isError1 == false){
        submitAdd.setAttribute("disabled", "disabled")
    }else{
        submitAdd.removeAttribute("disabled", "disabled")
    }

})
inputDate.addEventListener('keyup', function(){
    if(inputDate.value.length > 300 ){
        inputDate.style.border = '3px solid red'
        error.innerHTML = 'Не более 300 символов'
        isError = false
    }else{
        inputDate.style.border = '3px solid green'
        error.innerHTML = ''
        isError = true
    }
    if(!inputDate.value){
        inputDate.style.border = '3px solid red'
        error1.innerHTML = 'Заполните поле'
        isError1 = false
    }else{
        isError1 = true
        error1.innerHTML = ''
    }
    console.log(isError);
    console.log(isError1);
    console.log(isError2);
    console.log(isError21);
    if(isError2 == false || isError21 == false || isError == false || isError1 == false){
        submitAdd.setAttribute("disabled", "disabled")
    }else{
        submitAdd.removeAttribute("disabled", "disabled")
    }

})
form.addEventListener('submit', function(event){
    event.preventDefault()
})
function addArray(){
    let object = {
        name: inputTitle.value,
        date: inputDate.value
    }
    console.log(object)
        news.push(object)   
        newsPlace.innerHTML = ''
        showNews(news)
}
function showNews(){
    news.forEach(y => {
    newsPlace.insertAdjacentHTML('beforeend', `
    <div class="news-item">
        <h3 class="h3">${y.name}</h3>
        <p class="news-item__p">${y.date}</p>
    </div>
    `)
})
}

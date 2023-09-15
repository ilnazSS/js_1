let news = [
    {
        id: 1,
        name: 'Новость 1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor necessitatibus voluptatibus unde delectus, in aliquid officia nesciunt maiores fugit qui aut beatae provident quisquam blanditiis, at sit, ab commodi?',
        author: 'Пользователь 1',
        date: '21/01/2011'

    },
    {
        id: 2,
        name: 'Новость 2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor necessitatibus voluptatibus unde delectus, in aliquid officia nesciunt maiores fugit qui aut beatae provident quisquam blanditiis, at sit, ab commodi?',
        author: 'Пользователь 2',
        date: '21/01/2011'

    }
]
// console.log(news)

let inputTitle = document.querySelector('.titlee')
let inputDate = document.getElementById('date')
let inputArea = document.getElementById('area')
let submitAdd = document.getElementById('submitAdd')

let newsPlace = document.querySelector('.news')

submitAdd.addEventListener('click', addArray)

function addArray(){
    let object = {
        id: 3,
        name: inputTitle.value,
        text: inputArea.value,
        author: 'Ilnaz',
        date: inputDate.value
    }
    console.log(object)
    news.push(object)   
    newsPlace.innerHTML = ''
    inputTitle.value = ''
    inputArea.value = ''
    inputDate.value = ''
    showNews(news)
}

function showNews(){
    news.forEach(y => {
    newsPlace.insertAdjacentHTML('beforeend', `
    <div class="new">
        <div class="title">
            <h2 class="new_title">${y.name}</h2>
            <p class="new_date">${y.date}</p>
        </div>
        <p class="new_text">${y.text}</p>
        <div class="footer">
            <h4 class="new_name">${y.author}</h4>
            <p class="new_id">id:${y.id}</p>
        </div>
    </div>
    `)
})
}
showNews(news)
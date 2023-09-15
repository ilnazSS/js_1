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

    },
    {
        id: 3,
        name: 'Новость 3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor necessitatibus voluptatibus unde delectus, in aliquid officia nesciunt maiores fugit qui aut beatae provident quisquam blanditiis, at sit, ab commodi?',
        author: 'Пользователь 3',
        date: '21/01/2011'

    },
    {
        id: 4,
        name: 'Новость 4',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor necessitatibus voluptatibus unde delectus, in aliquid officia nesciunt maiores fugit qui aut beatae provident quisquam blanditiis, at sit, ab commodi?',
        author: 'Пользователь 4',
        date: '21/01/2011'

    },
    {
        id: 5,
        name: 'Новость 5',
        text: 'lllllllllLorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor necessitatibus voluptatibus unde delectus, in aliquid officia nesciunt maiores fugit qui aut beatae provident quisquam blanditiis, at sit, ab commodi?llllllllllllllllllllllllllllllllllllllllllllllllllll',
        author: 'Пользователь 5',
        date: '21/01/2011'

    }
]
console.log(news)

let newsPlace = document.querySelector('.news')
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
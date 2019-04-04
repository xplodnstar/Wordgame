var start = document.querySelector('#newGame')

start.addEventListener('click', function (e) {
    e.preventDefault()
    newGame.init()
})

var select = document.querySelector('.entry')

select.addEventListener('click', function (e) {
    e.preventDefault()
    newGame.Guess()
})

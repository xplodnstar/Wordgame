var button = document.querySelector('#newGame')

button.addEventListener('click', function (e) {
    e.preventDefault()

    I.publish('New Game')
})
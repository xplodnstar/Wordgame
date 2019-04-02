var newGame = (function () {
    // pick new random word from commonWords
    var randWord = commonWords[Math.floor(Math.random() * commonWords.length)]

    // split the word into an array
    var splitRand = randWord.split("")

    // replace the array elements with underscores
    var blanks = splitRand.map(function (letter) {
        return '_'
    })

    I.subscribe('New Game', function (x) {
        // put blanks into word section
        document.querySelector('.word').innerHTML = `${blanks}`
    })

    return {
        word: randWord,
        blanks: blanks
    }
})







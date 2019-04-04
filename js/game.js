var newGame = (function () {
    var randWord
    var splitRand
    var blanks
    var corral = []
    var letter
    var score = 5

    function init() {
        // clear all fields
        // $('.alpha').attr('disabled', false)
        var corral = []
        var letter = ''
        var score = 5
        document.querySelector('.score').innerHTML = `Tries left: ${score}`
        document.querySelector('.result').innerHTML = ''
        $('.alpha').attr('disabled', false)

        // limit list to words over 3 letters
        var wordList = commonWords.filter(function (item) {
            return (item.length > 2)
        })

        // pick new random word from commonWords
        randWord = wordList[Math.floor(Math.random() * wordList.length)]

        // split the word into an array
        splitRand = randWord.split('')

        // replace the array elements with underscores
        blanks = splitRand.map(function (lttr) {
            return '_'
        })

        // put blanks into word section and create a string
        document.querySelector('.word').innerHTML = `${blanks.join(' ')}`

        console.log("word: ", randWord)
    }

    $('.row').on('click', 'button', function (e) {
        e.preventDefault()
        letter = $(this).html()
        $(this).attr('disabled', true)
    })

    function Guess() {
        // check the letter against the word
        var posi = splitRand.indexOf(letter)

        // if wrong, place in the corral
        if (posi == -1) {
            corral.push(letter)
            score -= 1
            // document.querySelector('.corral').innerHTML = `${corral}`

            document.querySelector('.score').innerHTML = `${score}`
            // console.log("corral: ", corral)
        } else {
            // if right, place in the correct position of the word
            //add the letter to the posi in spaces, then remake blanks
            for (let i = 0; i < randWord.length; i += 1) {
                if (splitRand[i] === letter) {
                    blanks[i] = letter
                }
            }
        }

        console.log(blanks)

        // put new blanks into word section with letters and create a string
        document.querySelector('.word').innerHTML = `${blanks.join(' ')}`

        if (score === 0) {
            document.querySelector('.result').innerHTML = `YOU LOSE!!!`
            $('.alpha').attr('disabled', true)
        }

        if (blanks.indexOf('_') === -1) {
            document.querySelector('.result').innerHTML = `YOU WIN!!!`
            $('.alpha').attr('disabled', true)
        }
    }

    return {
        word: randWord,
        wordArr: splitRand,
        blanks: blanks,
        init: init,
        Guess: Guess,
        score: score,
    }
}())



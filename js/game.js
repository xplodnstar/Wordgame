var newGame = (function () {
    var randWord
    var splitRand
    var blanks
    var corral = []
    var letter
    var score = 5

    function init() {
        // clear all fields reset statuses
        var corral = []
        var letter = ''
        var score = 5
        document.querySelector('.score').innerHTML = `Tries left: ${score}`
        document.querySelector('.result').innerHTML = ''
        $('.alpha').attr('disabled', false)
        $('#legs2').removeClass('hide')
        $('#legs1').removeClass('hide')
        $('.arms').removeClass('hide')
        $('.torso').removeClass('hide')
        $('.eyes').removeClass('hide')

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
    }

    $('.row').on('click', 'button', function (e) {
        e.preventDefault()
        letter = $(this).html()
        $(this).attr('disabled', true)
    })

    function Guess() {
        // check the letter against the word
        var posi = splitRand.indexOf(letter)

        // if wrong, dock score
        if (posi == -1) {
            score -= 1
            document.querySelector('.score').innerHTML = `Tries left: ${score}`
        } else {
            // if right, place in the correct position of the word
            for (let i = 0; i < randWord.length; i += 1) {
                if (splitRand[i] === letter) {
                    blanks[i] = letter
                }
            }
        }

        // put new blanks into word section with letters and create a string
        document.querySelector('.word').innerHTML = `${blanks.join(' ')}`

        // losing 
        if (score === 4) {
            $('#legs2').addClass('hide')
        }
        if (score === 3) {
            $('#legs1').addClass('hide')
        }
        if (score === 2) {
            $('.arms').addClass('hide')
        }
        if (score === 1) {
            $('.torso').addClass('hide')
        }
        if (score === 0) {
            document.querySelector('.result').innerHTML = `YOU LOSE!!!`
            $('.eyes').addClass('hide')
            $('.alpha').attr('disabled', true)
        }

        // winning
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



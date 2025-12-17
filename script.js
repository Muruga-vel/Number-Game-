        var guessnum = document.getElementById("num")
        var Randomnum = Math.floor(Math.random() * 10) + 1
        var Result = document.getElementById("result")
        var totalscore = document.getElementById("sc")
        var checkbtn = document.querySelector("button")
        var score = 10

        function check() {
            var enternum = Number(guessnum.value)

            if (Randomnum === enternum) {
                Result.textContent = "🎉 You Won!"
                alert("You guessed it right!")
                document.querySelector("button").disabled = true
            } else {
                score--
                totalscore.textContent = "Score: " + score
                Result.textContent = "❌ Wrong guess"
            }

            if (score === 0) {
                Result.textContent = "💀 Game Over! Number was " + Randomnum
                document.querySelector("button").disabled = true
            }
        }
        function resetgame() {
    score = 10
    Randomnum = Math.floor(Math.random() * 10) + 1

    totalscore.textContent = "Score: 10"
    Result.textContent = "Start guessing..."
    guessnum.value = ""

    checkbtn.disabled = false
}



function rollDice() {
    let sides = document.getElementById ('numSides'). value
    let result = getDiceResult (sides)
    document.getElementById('dice-result').innerText = 'you rolled a '+result
}
    function getDiceResult(max) {
    let result = Math.ceil (Math. random () * max)
    return result
    }
    for (let i= 1; i< 100;i++) {
        let testResult = getDiceResult(i)
        if (testResult > i || testResult <1) throw Error ("invalid dice result" +testResult+"for max" +i )
        }

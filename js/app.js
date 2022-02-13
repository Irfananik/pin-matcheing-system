// random pin generate function
function getRandomPin() {
    const pin = Math.round(Math.random() * 10000)
    const stringPin = pin + ' '

    if (stringPin.length == 5) {
        return pin
    } else {
        return getRandomPin()
    }
}

function generatePin() {
    const pin = getRandomPin()
    document.getElementById('view-pin').value = pin
}

// key pad part
document.getElementById('key-pad').addEventListener('click', function(e) {
    const number = (e.target.innerText)
    const calculateInput = document.getElementById('input-number')

    if (isNaN(number)) {
        if (number === 'C')
            calculateInput.value = ''
    } else if (number === '&lt;') {
        calculateInput.value = parseInt(calculateInput.value) - 1
    } else {
        const previousNumber = calculateInput.value
        const newNumber = previousNumber + number
        calculateInput.value = newNumber
    }
})


// verify pin
function verifyPin() {
    const viewPin = document.getElementById('view-pin').value
    const inputNumber = document.getElementById('input-number').value

    const blankSpace = document.getElementById('notify-error')
    const pinMatched = document.getElementById('notify-success')
    const pinError = document.getElementById('notify-error')

    if (viewPin == '' && inputNumber == '') {
        blankSpace.style.display = 'block'
    } else if (viewPin == inputNumber) {
        pinMatched.style.display = 'block'
        pinError.style.display = 'none'
    } else {
        pinError.style.display = 'block'
        pinMatched.style.display = 'none'
    }
}
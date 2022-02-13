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
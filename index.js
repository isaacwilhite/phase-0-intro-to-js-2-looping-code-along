let namesArray = ["Guadalupe", "Ollie", "Aki"]
let event = 'surprise'
const writeCards = (namesArray, event) => {
    let messagesArray = []
    for (let i = 0; i < namesArray.length; i++) {
        messagesArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return messagesArray
}
const countDown = startingNumber => {
    while (startingNumber > 0) {
        console.log(startingNumber)
        startingNumber -= 1 
    }
    console.log(startingNumber)
}
countDown(10)
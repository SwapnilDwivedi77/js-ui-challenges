

function turnOnLight(color) {
    document.getElementsByClassName(color)[0].classList.remove('off');
}
function turnOffLight(color) {
    document.getElementsByClassName(color)[0].classList.add('off')
}

function updateTimer(time) {
    let timer = document.getElementsByClassName('timer')[0]
    for (let i = 0; i < time; i++) {
        setTimeout(() => {
            timer.textContent = time - i;
        }, i * 1000)
    }
}


async function handleLightSeq() {
    const delay = (wait) => new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve()
        }
            , wait * 1000))
    let order = ['green', 'yellow', 'red']
    for (let i = 0; i < order.length; i = (i + 1) % 3) {

        turnOnLight('red');
        turnOffLight('yellow')
        updateTimer(6)
        await delay(6);

        turnOnLight('green');
        turnOffLight('red')
        updateTimer(6)
        await delay(6);

        turnOnLight('yellow');
        turnOffLight('green')
        updateTimer(2)
        await delay(2)

    }
}









const main = () => {
    handleLightSeq()
}


main();
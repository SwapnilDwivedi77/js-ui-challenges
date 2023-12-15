const consoleInput = document.querySelector('.console-input')
const consoleHistory  = document.querySelector('.console-history');

function addResult (inputAsString,output) {
    const outputAsString = output instanceof Array ? `[${output.join(', ')}]` : output.toString();
    const inputLogEle =  document.createElement('div')
    const outputLogEle =  document.createElement('div')

    inputLogEle.classList.add('console-input-log')
    outputLogEle.classList.add('console-output-log')

    inputLogEle.textContent = `> ${inputAsString}`;
    outputLogEle.textContent = outputAsString;
    consoleHistory.append(inputLogEle,outputLogEle)
}

consoleInput.addEventListener("keyup" , e => {
    const code = consoleInput.value.trim();
    if(code.length ===0) return;
    if(e.key ==="Enter") {
        try {
            addResult(code,eval(code))
        } catch(error) {
            addResult(code,error)
        }
        consoleInput.value = ""
    }
})


/*
The counter should increment or decrement the value on each click.
User can enter the factor by which they want to change the counter.
*/

let CHANGE_FACTOR = null;

function handleCounterChange(event) {

    const actionId = event.target.id;
    const valueElement = document.getElementById('value');
    const value = Number(valueElement.textContent);
    let changeBy = CHANGE_FACTOR ? Number(CHANGE_FACTOR) : 1
    if (actionId === "increment") {
        valueElement.textContent = value + changeBy;
    }
    if (actionId === "decrement") {
        valueElement.textContent = value - changeBy;
    }
    if (actionId === "reset") {
        valueElement.textContent = 0;
    }
}

function handleFactorChange(event) { 
    CHANGE_FACTOR = event.target.value;
    document.getElementById('value').textContent=0
}

const main = ()=> {

let buttonSection = document.getElementById('button-section')
buttonSection.addEventListener('click',handleCounterChange);

document.getElementById('change-factor').addEventListener('change',handleFactorChange)

}

main();



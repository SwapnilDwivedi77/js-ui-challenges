let starContainer = document.getElementsByClassName('star-container')[0]
console.log("🚀 ~ starContainer:", starContainer)

let hoverIndex = null;
let filled = 0;

function fillStars(count) {
    let stars = document.getElementsByClassName('star')
    for(let i=0;i<stars.length;i++) {
        let star = stars[i];
        star.classList.remove('star-filled');
    }
    for(let i=0;i<count;i++) {
        let star = stars[i];
        star.classList.add('star-filled');
    }
}

function hoverListener(event) {
    let ele = event.target;
    if(ele && ele.classList.contains('star'))
        {
            hoverIndex=ele.dataset.index;
            fillStars(hoverIndex)
        }
}
function leaveListener(event) {
    hoverIndex=null;
    fillStars(filled);
}

function handleClick(event) {
    let ele = event.target;
    console.log(ele)
    if(ele.classList.contains('star')) {
        filled = ele.dataset.index
    }
}


starContainer.addEventListener('mouseover',hoverListener)
starContainer.addEventListener('mouseleave',leaveListener)
starContainer.addEventListener('click',handleClick)

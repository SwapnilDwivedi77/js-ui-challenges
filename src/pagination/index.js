let total =30;
let pageSize = 5;
let pages = Math.floor(total/pageSize) 
let paginationBtnContainer= document.getElementsByClassName('page-btn-container')[0]
let currentPage = 0; 

function setCurrentPage(pageNo) {
    let btns = paginationBtnContainer.children
    console.log("🚀 ~ setCurrentPage ~ btns:", pageNo)
    let target = btns[pageNo]
    for(let i=0;i<btns.length;i++) {
        let btn = btns[i]
        btn.classList.remove('current-page')
    }
    target.classList.add('current-page')
    currentPage=pageNo
}

function renderPaginationBtn() {
    pages = Math.floor(total/pageSize) 
    paginationBtnContainer.innerHTML=''
    for(let i=0;i<pages;i++) {
        let btn = document.createElement('button')
        btn.classList.add('pagination-btn');
        btn.textContent=i+1;
        btn.id = i;
        paginationBtnContainer.appendChild(btn)  
        if(i === currentPage) setCurrentPage(i)
    }
}

function handlePrevNext(pageNo) {
    let prevBtn = document.getElementById('prev')
    let nextBtn = document.getElementById('next')
    prevBtn.disabled=false;
    nextBtn.disabled=false;
    if(pageNo==0) prevBtn.disabled=true
    if(pageNo==pages-1)  nextBtn.disabled=true
}
function handlePagination(event) {
    let ele = event.target
    let pageNo = ele.id
    if(ele.classList.contains('pagination-btn')) {
        if(ele.id==='prev' && currentPage>=0) {
            setCurrentPage(currentPage-1)
        }
        else if (ele.id==='next' && currentPage<pages) {
            setCurrentPage(currentPage+1)
        }
        else
        setCurrentPage(pageNo)
        
        handlePrevNext(currentPage)
        console.log({currentPage,pages})
    }
    console.log({currentPage})
}

function handleSizeSelect(event) {
    pageSize = event.target.value
    console.log("🚀 ~ handleSizeSelect ~ pageSize:", pageSize)
    renderPaginationBtn()
}



document.getElementsByClassName('pagination-container')[0].addEventListener('click',handlePagination)
document.getElementsByClassName('size-select')[0].addEventListener('change',handleSizeSelect)

renderPaginationBtn()
handlePrevNext(currentPage)
document.getElementById('count-words').addEventListener('click',function(event){
    const content = document.querySelector('textarea').value;
    
    let wordsCount = 0;
    let paraCount = 0;
    
    
    let wordsArray = content.split(' ');
    let charArray = content.split('')

    wordsArray.forEach(word=>{
        if(word.trim().length > 0) wordsCount++;
    })
    for(let i=0;i<charArray.length;) {
        let c = charArray[i]
        if(c == '\n') {
            while(charArray[i]=='\n')i++;
            paraCount++;
        }
        else i++;
    }
    document.getElementById('words').textContent = wordsCount
    document.getElementById('chars').textContent = charArray.length
    document.getElementById('paras').textContent = paraCount
      

})
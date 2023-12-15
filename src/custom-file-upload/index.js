
document.querySelectorAll('.file-upload__button').forEach(button => {
    const hiddenInput = button.parentElement.querySelector('.file-upload__input');
    const label = button.parentElement.querySelector('.file-upload__label');
    const defaultLabel = 'No file(s) selected'
    
    // set default text for label
    label.textContent = defaultLabel;
    label.title = defaultLabel

    button.addEventListener('click',function() {
        hiddenInput.click();
    })
    hiddenInput.addEventListener('change',function() {
        const fileNameList = Array.from(hiddenInput.files).map(file => {
            return file.name
        })
        label.textContent = fileNameList.join(', ') || defaultLabel
    })
})
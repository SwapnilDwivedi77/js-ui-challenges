let currentStep = 0;
function handelNextStepClick() {
    document.getElementsByClassName('next')[0].addEventListener('click',function(event) {
        let steps = document.getElementsByClassName('step');
        if(currentStep<steps.length)
        {
            steps[currentStep].classList.add('completed')
        currentStep+=1;
        }
        else{
            document.getElementsByClassName('next')[0].disabled=1;
        }
    })
}






const main = ()=> {
handelNextStepClick()
}

main();
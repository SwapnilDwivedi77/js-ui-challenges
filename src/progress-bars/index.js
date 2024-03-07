/*
- For progress bar we need a container that container has one more div that is used to 
show the progress state. 
- Add width to child div and color different from the parent this will give a static progress bar
- For dynamic bar on a click update the width of the child div by using interval and as the width 
increases it move ahead and clear interval when width is 100%
*/

const handleStartProgress = (event) => {
  console.log("clicked");
  let width = 1;
  let timer = setInterval(() => {
    console.log("running");
    if (width <= 100) {
      width += 5;
      document.getElementById("bar-2").children[0].style.width = width + "%";
    } else clearInterval(timer);
  }, 100);
};

const main = () => {
  let startProgressBtn = document.getElementById("start-progress-btn");
  console.log("🚀 ~ main ~ startProgressBtn:", startProgressBtn);
  startProgressBtn.addEventListener("click", handleStartProgress);
};
main();

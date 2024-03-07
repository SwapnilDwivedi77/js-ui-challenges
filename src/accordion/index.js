/*
Each accordion contains a header and a content section. 
Attach an event on container and from target element find the closest accordion wrapper,
then toggle the active class of the content section.
By default content section remains hidden.
*/

const handleHeaderClick = (event) => {
  let targetEle = event.target;
  const accordionContainer = targetEle.closest(".accordion-container");
  let contentEle = accordionContainer.querySelector(".content");
  contentEle.classList.toggle("active");
  let iconEle = accordionContainer.querySelector(".icon");
  iconEle.textContent = iconEle.textContent == "+" ? "-" : "+";
};

const main = () => {
  containerEle = document.getElementById("container");
  containerEle.addEventListener("click", handleHeaderClick);
};

main();

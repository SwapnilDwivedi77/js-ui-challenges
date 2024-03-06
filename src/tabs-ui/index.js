/*
- So we have buttons for tabs and when clicked content related to each tab should appear
window below
- When page loads make the first tab active and show its respective content.
- We'll use data attribute to keep track of which tab is clicked and to display respective content for that tab
*/

const handleActiveTab = (targetTab) => {
  let tabsList = document.getElementsByClassName("tab");
  Array.from(tabsList).forEach((tab) => {
    tab.classList.remove("active");
    if (tab.dataset.tab === targetTab.dataset.tab) tab.classList.add("active");
  });

  let contentContainerList = document.getElementById(
    "tab-content-container"
  ).children;

  Array.from(contentContainerList).forEach((tabContent) => {
    tabContent.style.display = "none";
    if (tabContent.id === targetTab.dataset.tab + "-content")
      tabContent.style.display = "block";
  });
};

const tabInit = () => {
  let firstTab = document.getElementsByClassName("tab")[0];
  handleActiveTab(firstTab);
};

const tabClickHandler = (event) => {
  let targetTab = event.target;
  console.log(targetTab);
  handleActiveTab(targetTab);
};
const main = () => {
  let tabContainer = document.getElementById("tab-container");
  tabContainer.addEventListener("click", tabClickHandler);
  tabInit();
};

main();

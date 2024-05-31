let keywords = ["Developer", "Writer", "Student"];

let keywordContainer = document.getElementsByClassName("right")[0];

const delay = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));

async function displayTextWithTyping(value) {
  delay(300);
  for (let i = 0; i < value.length; i++) {
    keywordContainer.textContent += value.charAt(i);
    await delay(300);
  }
  await delay(300);
  for (let i = 0; i < value.length; i++) {
    keywordContainer.textContent = value.substring(0, value.length - i - 1);
    await delay(300);
  }
}

async function textLoad() {
  for (const word of keywords) {
    await displayTextWithTyping(word);
  }
  textLoad();
}

textLoad();

const tagsEl = document.querySelector("#tags");
const textarea = document.querySelector("#textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  generateSpan(e.target.value);
  if (e.key == "Enter") {
    randomSelect();
    e.target.value = "";
  }
});

const generateSpan = (value) => {
  const tags = value
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  console.log(tags);
  tagsEl.innerHTML = "";

  return tags.map((el) => {
    const tag = document.createElement("span");
    tag.classList.add("tag");
    tag.innerText = el;
    tagsEl.appendChild(tag);
  });
};

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = randomSpan();

    if (randomTag !== undefined) {
      selectSpan(randomTag);

      setTimeout(() => {
        unselectSpan(randomTag);
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = randomSpan();
      selectSpan(randomTag);
    }, 100);
  }, 100 * times);
}

const randomSpan = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

const selectSpan = (tag) => {
  tag.classList.add("highlight");
};

const unselectSpan = (tag) => {
  tag.classList.remove("highlight");
};

// wooow man

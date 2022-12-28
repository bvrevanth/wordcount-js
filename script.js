const textArea = document.querySelector("textarea");
const value = document.querySelector(".value");

textArea.oninput = () => {
  const text = textArea.value;
  const textLength = textArea.value.length;
  value.innerHTML = `${textLength}`;
};

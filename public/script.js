function copyText(htmlElement) {
  if (!htmlElement) {
    console.log("returned");
    return;
  }

  let elementText = htmlElement.innerText;
  let inputElement = document.createElement("input");
  inputElement.setAttribute("value", elementText);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand("copy");
  inputElement.parentNode.removeChild(inputElement);
}

document.querySelector("#copy-btn").onclick = function () {
  document.querySelector("#copied-badge").style.display = "inline";
  copyText(document.querySelector("#shortenned-url"));
};

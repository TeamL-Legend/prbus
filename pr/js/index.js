let container = document.querySelector(`.container`);
let body = document.querySelector(`body`);
let text = document.querySelector(`.text`);

setTimeout(() => {
   container.classList.remove(`none`);
   body.classList.remove(`whcl`);
   text.classList.add(`none`);
  }, 5000);

let txtext = document.querySelector(`.txtext`);

setTimeout(() => {
    txtext.classList.add(`opac`);
    txtext.classList.remove(`txtext`);
   }, 1000);

setTimeout(() => {
    txtext.classList.remove(`opac`);
    txtext.classList.add(`txtext`);
   }, 2000);

setTimeout(() => {
    txtext.classList.add(`opac`);
    txtext.classList.remove(`txtext`);
   }, 3000);

setTimeout(() => {
    txtext.classList.remove(`opac`);
    txtext.classList.add(`txtext`);
    txtext.innerHTML = `Подключено`;
   }, 4000);
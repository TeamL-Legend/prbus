let container = document.querySelector(`.container`);
let body = document.querySelector(`body`);
let text = document.querySelector(`.text`);
let faq = document.querySelector(`.faq`);
let trcontainer = document.querySelector(`.trcontainer`);

setTimeout(() => {
   container.classList.remove(`none`);
   body.classList.remove(`whcl`);
   text.classList.add(`none`);
   faq.classList.add(`none`);
   trcontainer.classList.remove(`none`);
  }, 4000);

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
    txtext.classList.remove(`opac`);
    txtext.classList.add(`txtext`);
    txtext.innerHTML = `Подключено`;
   }, 3000);
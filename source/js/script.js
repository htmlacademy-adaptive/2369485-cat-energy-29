let buttonTog = document.querySelector(".main-nav__toggle");
let navigation = document.querySelector(".site-list");
let burgerSpan =  document.querySelector (".main-nav__burger");

buttonTog.onclick = function(){
  navigation.classList.toggle("site-list--hidden");
  burgerSpan.classList.toggle("main-nav__burger-rendering");
  burgerSpan.classList.toggle("main-nav__burger-close");
};

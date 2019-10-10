var myCard = document.getElementsByClassName("flip-card-inner");

function flipCard () {
  myCard[0].classList.add("click-card");
  setInterval(remove, 5000);
}
function remove (){
  myCard[0].classList.remove("click-card");
}
myCard[0].addEventListener("click",flipCard);


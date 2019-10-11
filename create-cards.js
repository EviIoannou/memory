var cards = [];

//var img1 = to collect images from HTML with DOM

var pictures = ["pictures/dog.png","pictures/dolphin.png", 
                "pictures/ladybug.png", "pictures/lamb.png", "pictures/parrot.png", "pictures/penguin.png", "pictures/tiger.png", "pictures/zebra.png"]; 

var ids = ["dog", "dolphin", "ladybug", "lamb", "parrot", "penguin", "tiger", "zebra"];

function Card (picture, id) {
  this.picture = picture;
  this.id = id;
}

function pack () {
// this function to create 2 of each card

      pictures.forEach( function (picture, index) {
        
          let card = new Card (picture, ids[index]);
          cards.push(card);

          let card2 = new Card (picture, ids[index]);
          cards.push(card2);
        
      });
  
}

pack();


function shuffle (deck) {   //deck implies argument here
  for (let i =(deck.length - 1); i >0; i--){   
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  };
  return deck;
}

shuffle(cards);

console.log(cards);



function createGame () {

  cards.forEach( function (card, index) {
    var visualCard  = document.createElement('div');
    visualCard.classList.add("flip-card");

    visualCard.innerHTML =  `<div class="flip-card-inner" >
                                <div class="flip-card-front" id= ` + index + `>
                                  <!-- CSS Style -->
                                </div>
                                <div class="flip-card-back">
                                  <img src="${card.picture}" alt="">
                                </div>
                              </div>`;

    var board = document.getElementsByClassName("container");
    board[0].appendChild(visualCard);


  });

}

createGame();


var myCard = document.getElementsByClassName("flip-card-inner");

function flipCard (e) {
  console.log(e.target.id);
  var cardid = parseInt(e.target.id);
  myCard[cardid].classList.add("click-card");
 // setTimeout(remove(cardid), 5000);
}


function remove (e) {
  //console.log(e.target.id);
  //var cardid = parseInt(e.target.id);
  myCard[cardid].classList.remove("click-card");
}

function flipback () {
  setTimeout(remove(), 5000)
}

var board = document.getElementsByClassName("container");
board[0].addEventListener("click",flipCard);
board[0].addEventListener("click",flipback);




//e.target.id is how one gets a unique ID for each card
//e.target.id does not work directly in [ ]
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

console.log(cards);
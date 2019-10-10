
var cards = [];

//var img1 = to collect images from HTML with DOM

var patterns = [img1, img2, img]; //img1 up to img8

var ids = [1, 2, 3, 4, 5, 6, 7, 8];

function Card (pattern) {
  this.pattern = pattern;
  this.id = id;
}

function pack () {

  for ( let i = 0; i < 2; i++) {

    // for (let i = 0; i < patterns.length; i++) {

      patterns.forEach( function (pattern) {
        let oneCard = new Card (pattern);
        cards.push(oneCard);
      });
    // };

  };

}
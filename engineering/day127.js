var cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suit = ["Diamonds", "Spades", "Hearts", "Clubs"];

function randomCard() {

  var cardNumberLength = cardNumber.length;
  var randomCardNumber = Math.floor(Math.random() * cardNumberLength);
  var suitLength = suit.length;
  var randomSuitNumber = Math.floor(Math.random() * suitLength);
  var finalSuit = suit[randomSuitNumber];

  $("p").text(cardNumber[randomCardNumber]);
  $("div").removeClass("suit-diamonds suit-spades suit-hearts suit-clubs");
 
  switch (finalSuit) {
    case "Diamonds":
      $("div").addClass("suit-diamonds");
      break;
    case "Spades":
      $("div").addClass("suit-spades");
      break;
    case "Hearts":
      $("div").addClass("suit-hearts");
      break;
    case "Clubs":
      $("div").addClass("suit-clubs");
      break;
  }
}
randomCard();
$(".button").click(function(e) {
  e.preventDefault();
  randomCard();
});
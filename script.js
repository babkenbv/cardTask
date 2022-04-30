const addButton = document.getElementById("addButton");
const sortButton = document.getElementById("sortButton");
const bodyContent = document.getElementById("bodyContent");
let cardNum = [];

//onclick add a card to a bodyContent
addButton.onclick = function () {
  const newCard = document.createElement("div");
  const num = document.createElement("div");
  const delButton = document.createElement("input");
  delButton.type = "button";
  delButton.className = "delButton";
  delButton.id = "delButton";
  delButton.value = "X";
  delButton.onclick = deleteCard;
  newCard.className = "card";
  num.className = "numContainer";
  num.innerHTML = Math.floor(Math.random() * 1000);
  newCard.appendChild(delButton);
  newCard.appendChild(num);
  bodyContent.appendChild(newCard);
};

//onclick sort the cards
sortButton.onclick = function () {
  cardNum = [];
  const cards = document.querySelectorAll(".numContainer");
  bodyContent.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    cardNum.push(cards[i].innerHTML);
    cardNum.sort(function (a, b) {
      return a - b;
    });
  }

  for (let i = 0; i < cardNum.length; i++) {
    const newCard = document.createElement("div");
    const num = document.createElement("div");
    const delButton = document.createElement("input");
    delButton.type = "button";
    delButton.className = "delButton";
    delButton.id = "delButton";
    delButton.value = "X";
    delButton.onclick = deleteCard;
    newCard.className = "card";
    num.className = "numContainer";
    num.innerHTML = cardNum[i];
    newCard.appendChild(delButton);
    newCard.appendChild(num);
    bodyContent.appendChild(newCard);
  }
};

//onclick delete a card
function deleteCard(e) {
  const elem = e.target.parentNode;
  bodyContent.removeChild(elem);
}

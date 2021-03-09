// SUITS & VALUES create 52  unique cards.

const SUITS=["♠", "♣", "♥", "♦"]//suits as characters
const VALUES = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ]
  export default class Deck {
    constructor(cards = freshDeck()) {
      this.cards = cards
    }
  
    get numberOfCards() {// to 
      return this.cards.length
    }
  
    pop() {
      return this.cards.shift()
    }
  
    push(card) {
      this.cards.push(card)
    }
  
    shuffle() {//to sort the card shuffle() is created & for loop is created to have random cards 
      for (let i = this.numberOfCards - 1; i > 0; i--) {//instead of writing "this.card.length", getter was created - get numberOfCards()
        const newIndex = Math.floor(Math.random() * (i + 1))//to make sure it's integer, Math.Foor was used.
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards[i]
        this.cards[i] = oldValue
      }
    }
  }
  
  class Card {
    constructor(suit, value) {
      this.suit = suit
      this.value = value
    }
  

    get color() {
      return this.suit === "♣" || this.suit === "♠" ? "black" : "red"
    }
  
    getHTML() {
      const cardDiv = document.createElement("div")
      cardDiv.innerText = this.suit
      cardDiv.classList.add("card", this.color)
      cardDiv.dataset.value = `${this.value} ${this.suit}`
       return cardDiv
    }
  }
  
  function freshDeck() {
    return SUITS.flatMap(suit => {//it maps through the arrays of array & return one single array
      return VALUES.map(value => {//look through Values & flatMap will map them into an array
        return new Card(suit, value)
      })
    })
  }



import { _getDeck, _getDecks, _addDeck, _addCardToDeck } from "./_DATA";

export function getDeck(title) {
  return _getDeck(title)
    .then((deck) => console.log(deck))
    .catch((err) => alert(err));
}

export function getDecks() {
  return _getDecks().then((decks) => console.log(decks));
}

export function addDeck(title) {
  return (
    _addDeck(title)
      // .then((decks) => console.log(decks))
      .catch((err) => alert(err))
  );
}

export function addCard(deckTitle, question, answer) {
  return (
    _addCardToDeck(deckTitle, { question, answer })
      // .then((decks) => console.log(decks))
      .catch((err) => alert(err))
  );
}

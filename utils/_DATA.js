let decks = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

export function _getDecks() {
  return new Promise((res, rej) => {
    setTimeout(() => res(decks), 1000);
  });
}

export function _getDeck(id) {
  const deck = Object.values(decks).filter((d) => d.title === id);
  return new Promise((res, rej) => {
    if (deck.length === 0) rej("Deck with id " + id + " not found.");
    else setTimeout(() => res(deck), 500);
  });
}

export function _addDeck(title) {
  return new Promise((res, rej) => {
    if (Object.keys(decks).includes(title)) {
      rej("A deck with the same title already exists");
    } else {
      setTimeout(() => {
        decks = {
          ...decks,
          [title]: {
            title,
            questions: [],
          },
        };
        res(decks);
      }, 500);
    }
  });
}

export function _addCardToDeck(id, card) {
  return new Promise((res, rej) => {
    if (!Object.keys(decks).includes(id)) {
      rej("Deck with title " + id + " is not found.");
    } else if (card.question === "" || card.answer === "") {
      rej("Invalid quiz data.");
    } else {
      setTimeout(() => {
        decks = {
          ...decks,
          [id]: {
            ...decks[id],
            questions: decks[id].questions.concat(card),
          },
        };
        res(decks);
      }, 1000);
    }
  });
}

import { RECIEVE_DECKS, ADD_DECK, ADD_CARD } from "../actions/index";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECIEVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };

    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [],
        },
      };
    case ADD_CARD:
      const { deckTitle, card } = action;

      return {
        ...state,
        [deckTitle]: {
          ...state[deckTitle],
          questions: state[deckTitle].questions.concat(card),
        },
      };

    default:
      return state;
  }
}

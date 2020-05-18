import { _decks, DECKS_STORAGE_KEY } from "./_DATA";
import { AsyncStorage } from "react-native";

export async function getDeck(title) {
  try {
    const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    return JSON.parse(decks)[title];
  } catch (error) {
    alert(error);
  }
}

export async function getDecks() {
  try {
    const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    if (decks === null) {
      await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(_decks));
    }

    return decks === null ? _decks : JSON.parse(decks);
  } catch (error) {
    alert(error);
  }
}

export async function addDeck(title) {
  try {
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: [],
        },
      })
    );
  } catch (error) {
    alert(error);
  }
}

export async function addCard(deckTitle, card) {
  try {
    const deck = await getDeck(deckTitle);

    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [deckTitle]: {
          questions: deck.questions.concat(card),
        },
      })
    );
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

export async function resetData() {
  try {
    await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(_decks));
  } catch (error) {
    alert(error);
  }
}

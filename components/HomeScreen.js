import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeckList from "./DeckList";
import NewDeck from "./NewDeck";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Decks" component={DeckList} />
      <Tab.Screen name="Add Deck" component={NewDeck} />
    </Tab.Navigator>
  );
}

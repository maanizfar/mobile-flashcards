import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeckList from "./DeckList";
import NewDeck from "./NewDeck";
import { blue } from "../utils/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Decks"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Decks") {
            const name = focused ? "cards" : "cards-outline";
            return (
              <MaterialCommunityIcons name={name} size={size} color={color} />
            );
          } else if (route.name === "AddDeck") {
            const name = focused ? "plus-square" : "plus-square-o";
            return <Icon name={name} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: blue,
      }}
    >
      <Tab.Screen name="Decks" component={DeckList} />
      <Tab.Screen
        name="AddDeck"
        component={NewDeck}
        options={{ title: "Add Deck" }}
      />
    </Tab.Navigator>
  );
}

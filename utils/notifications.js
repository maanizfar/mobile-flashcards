import { AsyncStorage } from "react-native";
import * as Permissions from "expo-permissions";
import { Notifications } from "expo";

const NOTIFICATION_STORAGE_KEY = "mobile_flashcards.notification";

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
}

function createNotification() {
  return {
    title: "Flash Cards",
    body: "Come back to study for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);
            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day",
            });

            AsyncStorage.setItem(
              NOTIFICATION_STORAGE_KEY,
              JSON.stringify(true)
            );
          }
        });
      }
    })
    .catch((err) => console.warn(err));
}

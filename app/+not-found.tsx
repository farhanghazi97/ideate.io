import { Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Oops!" }} />
    </View>
  );
}

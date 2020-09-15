import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Onboarding from "./src/onboarding";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Onboarding />
      <StatusBar style="auto" />
    </View>
  );
}

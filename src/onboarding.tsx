import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ImagesGrid from "./components/images-grid";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <ImagesGrid />
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Beautiful, free photos</Text>
        <Text style={styles.text}>
          Discover over 700,000 free high-res photos that you can save and use
          for anything
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 18,
  },
  headingText: {
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: 0.5,
    color: "#fff",
    marginBottom: 8,
  },
  text: {
    color: "#ccc",
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 12,
    justifyContent: "flex-end",
    backgroundColor: "#000",
  },
});

export default Onboarding;

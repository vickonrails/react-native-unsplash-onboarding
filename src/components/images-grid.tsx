import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const images = [
  require("../images/cat-01.jpg"),
  require("../images/cat-02.jpg"),
  require("../images/cat-03.jpg"),
  require("../images/cat-04.jpg"),
  require("../images/cat-05.jpg"),
  require("../images/cat-06.jpg"),
  require("../images/cat-07.jpg"),
  require("../images/cat-08.jpg"),
  require("../images/cat-09.jpg"),
  require("../images/cat-10.jpg"),
  require("../images/cat-11.jpg"),
];

const ImagesGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        {images.map((imageName) => {
          return <Image source={imageName} style={styles.image} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "white",
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    flex: 1,
    flexWrap: "wrap",
    flexBasis: "33%",
  },
});

export default ImagesGrid;

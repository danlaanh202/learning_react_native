import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/guess_number/PrimaryButton";
import Title from "../components/guess_number/Title";
import colors from "../constants/colors";
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 18,
    textAlign: "center",
  },
  highlightText: {
    color: colors.primary500,
    fontWeight: "bold",
  },
});
const GameOverScreen = ({ roundNumber, pickedNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("../assets/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightText}>{roundNumber}</Text> rounds to guess
        the number <Text style={styles.highlightText}>{pickedNumber}</Text>
      </Text>
      <PrimaryButton pressHandler={onStartNewGame}>
        Start new game
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

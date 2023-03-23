import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import NumberContainer from "../components/guess_number/NumberContainer";
import Title from "../components/guess_number/Title";
import generateRandomBetween from "../constants/generateRandomBetween";
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
const GameScreen = ({ pickedNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, pickedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

export default GameScreen;
//Video 59

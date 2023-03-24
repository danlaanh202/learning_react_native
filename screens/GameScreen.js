import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/guess_number/Card";
import InstructionText from "../components/guess_number/InstructionText";
import NumberContainer from "../components/guess_number/NumberContainer";
import PrimaryButton from "../components/guess_number/PrimaryButton";
import Title from "../components/guess_number/Title";
import generateRandomBetween from "../constants/generateRandomBetween";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/guess_number/GuessLogItem";
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    padding: 12,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
});

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ pickedNumber, setGameIsOver, increaseGuessRound }) => {
  const initialGuess = generateRandomBetween(1, 100, pickedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  function nextGuessHandler(direction) {
    //lower or greater
    increaseGuessRound();
    if (
      (direction === "lower" && currentGuess < pickedNumber) ||
      (direction === "greater" && currentGuess > pickedNumber)
    ) {
      Alert.alert("Chọn sai", "Bạn đã chọn sai", [
        {
          text: "oce",
          style: "cancel",
          onPress: () => {},
        },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((prev) => [newRandomNumber, ...prev]);
  }
  useEffect(() => {
    if (currentGuess === pickedNumber) {
      setGameIsOver(true);
    }
  }, [currentGuess, pickedNumber, setGameIsOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              pressHandler={() => {
                nextGuessHandler("greater");
              }}
            >
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              guess={itemData.item}
              roundNumber={guessRoundsListLength - itemData.index}
            >
              {itemData.item}
            </GuessLogItem>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

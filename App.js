import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRound, setGuessRound] = useState(0);
  // useFonts({
  //   "open-sans": require("./assets/fonts/abcxyz.ttf"),
  // });

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRound(0);
    setGameIsOver(false);
  }
  function increaseGuessRound() {
    setGuessRound((prev) => prev + 1);
  }
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        increaseGuessRound={increaseGuessRound}
        setGameIsOver={setGameIsOver}
        pickedNumber={userNumber}
      />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        pickedNumber={userNumber}
        roundNumber={guessRound}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[colors.primary700, colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          style={styles.rootScreen}
          resizeMode="cover"
          source={require("./assets/dice.png")}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: "#ddb52f",
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

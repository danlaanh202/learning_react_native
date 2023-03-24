import { useState } from "react";
import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import Card from "../components/guess_number/Card";
import InstructionText from "../components/guess_number/InstructionText";
import PrimaryButton from "../components/guess_number/PrimaryButton";
import Title from "../components/guess_number/Title";
import colors from "../constants/colors";
const StartGameScreen = ({ onPickedNumber }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const confirmInputHandler = () => {
    const choosenNumber = Number(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("invalid number", "sai cmnr", [
        {
          text: "OKE",
          style: "destructive",
          onPress: () => {
            setEnteredValue("");
          },
        },
      ]);
      return;
    }
    onPickedNumber(choosenNumber);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>GUESS MY NUMBER</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredValue}
          onChangeText={(text) => {
            setEnteredValue(text);
          }}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={() => setEnteredValue("")}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    // display: "flex",
    flexDirection: "row",
    marginTop: 4,
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;

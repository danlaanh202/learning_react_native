import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/guess_number/PrimaryButton";
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
    <View style={styles.inputContainer}>
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
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 100,
    backgroundColor: colors.primary800,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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

import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ isModalVisible, input, onChangeText, onPress }) => {
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/icon.png")}
        /> */}
        <TextInput
          onChangeText={onChangeText}
          value={input}
          style={styles.textInput}
          placeholder="Your course goals"
        />
        <Button onPress={onPress} title="Submit" />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    // flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    flex: 1,
    borderRadius: 4,
    padding: 4,
  },
});
export default GoalInput;

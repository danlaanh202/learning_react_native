import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
  instructionT: {
    color: colors.accent500,
    fontSize: 24,
  },
});
const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionT, style]}>{children}</Text>;
};

export default InstructionText;

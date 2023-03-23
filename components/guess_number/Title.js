import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: colors.accent500,
    textAlign: "center",
    padding: 8,
    borderWidth: 2,
    borderColor: colors.accent500,
  },
});
const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

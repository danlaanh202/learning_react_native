import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 36,
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
});
const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

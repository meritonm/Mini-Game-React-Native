import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#dddddd",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#000000",
    padding: 12,
  },
});

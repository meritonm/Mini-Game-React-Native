import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    // fontWeight: "bold",
    color: "#dddddd",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#dddddd",
    padding: 12,
  },
});

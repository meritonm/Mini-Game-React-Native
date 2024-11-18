import { Platform, StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "#dddddd",
    textAlign: "center",
    borderWidth: 2,
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({
    //   ios: 0,
    //   android: 2,
    // }),

    borderColor: "#dddddd",
    padding: 12,
    maxWidth: "80%",
    minWidth: "80%",
    width: 300,
  },
});

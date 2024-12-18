import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accentColor,
    padding: deviceWidth < 380 ? 12 : 23,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accentColor,
    fontSize: deviceWidth < 380 ? 28 : 24,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});

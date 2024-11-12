import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screen-components/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#9d0651", "#dfb322"]} style={styles.appContainer}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: "#b6ae91",
  },
});

import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screen-components/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#9d0651", "#dfb322"]} style={styles.appContainer}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: "#b6ae91",
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screen-components/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screen-components/GameScreen";
import { useState } from "react";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedGameHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNum={pickedGameHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.linearColor1, Colors.linearColor2]}
      style={styles.appContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
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

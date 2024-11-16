// import { Text, View, StyleSheet, Alert } from "react-native";
// import Title from "../components/ui/Title";
// import { useEffect, useState } from "react";
// import NumberContainer from "../components/game/NumberContainer";
// import PrimaryButton from "../components/ui/PrimaryButton";

// function generateRandomBetween(min, max, exclude) {
//   const rndNum = Math.floor(Math.random() * (max - min)) + min;

//   if (rndNum === exclude) {
//     return generateRandomBetween(min, max, exclude);
//   } else {
//     return rndNum;
//   }
// }

// let minBoundary = 1;
// let maxBoundary = 100;

// function GameScreen({ userNumber, onGameOver }) {
//   const initiaalGuess = generateRandomBetween(
//     minBoundary,
//     maxBoundary,
//     userNumber
//   );
//   const [currentGuess, setCurrentGuess] = useState(initiaalGuess);

//   useEffect(() => {
//     if (currentGuess === userNumber) {
//       onGameOver();
//     }
//   }, [currentGuess, userNumber, onGameOver]);

//   //Direction => Lower or greater
//   function nextGuessHandler(direction) {
//     if (
//       (direction === "lower" && currentGuess < userNumber) ||
//       (direction === "greater" && currentGuess > userNumber)
//     ) {
//       Alert.alert("Dont lie, You should tell me if it is higher or lower", [
//         { text: "Sorry!", style: "cancel" },
//       ]);
//       return;
//     }
//     if (direction === "lower") {
//       // maxBoundary = currentGuess - 1;
//       maxBoundary = currentGuess;
//     } else {
//       minBoundary = currentGuess + 1;
//     }
//     console.log(minBoundary, maxBoundary);
//     const nextRndNumber = generateRandomBetween(
//       minBoundary,
//       maxBoundary,
//       currentGuess
//     );
//     setCurrentGuess(nextRndNumber);
//   }

//   return (
//     <View style={styles.screen}>
//       <Title>Opponent's Guess</Title>
//       {/* GUESS */}
//       <NumberContainer>{currentGuess}</NumberContainer>
//       <Text></Text>
//       <View>
//         <Text>Higher or lower?</Text>
//         <View>
//           <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
//             -
//           </PrimaryButton>
//           <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
//             +
//           </PrimaryButton>
//         </View>
//         {/* + - */}
//       </View>
//       {/* <View>LOG ROUNDS</View> */}
//     </View>
//   );
// }

// export default GameScreen;

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     padding: 24,
//   },
// });

import { View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initiaalGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initiaalGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  //Direction => Lower or greater
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie, You should tell me if it is higher or lower", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const nextRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(nextRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              +
            </PrimaryButton>
          </View>
        </View>
        {/* + - */}
      </Card>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 18,
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },
});

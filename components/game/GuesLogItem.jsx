import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const GuesLogItem  = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.textRounded}>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuesLogItem;

const styles = StyleSheet.create({
  listContainer: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accentColor,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  textRounded: {
    fontFamily: "open-sans",
  },
});

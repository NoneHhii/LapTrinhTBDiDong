import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  options: string[];
  onSelect: (value: string) => void;
}

export const RadioBtnComponent: React.FC<Props> = ({ options, onSelect }) => {
  const [selected, setSelected] = useState<string>("");

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.radioContainer}
          onPress={() => handleSelect(option)}
        >
          <View style={styles.radioCircle}>
            {selected === option && <View style={styles.radioInner} />}
          </View>
          <Text style={styles.radioText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, flexDirection: 'row', justifyContent: "space-evenly" },
  radioContainer: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#2e86de",
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#2e86de",
  },
  radioText: { marginLeft: 10, fontSize: 16 },
});

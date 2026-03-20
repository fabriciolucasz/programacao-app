import { useState } from "react";
import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CalculatorPage() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handlePress = (value: string) => {
    if (value === 'C') {
      setInput('');
      setResult(null);
    } else if (value === '=') {
      try {
        const evaluated = eval(input.replace('x', '*').replace('÷', '/'));
        setResult(evaluated.toString());
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
    Keyboard.dismiss();
  };

  const buttons = [
    ['C', '÷', 'x', '⌫'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', '.', '']
  ];

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[styles.button, button === '=' ? styles.equalsButton : {}]}
                onPress={() => handlePress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputText: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'right',
  },
  resultText: {
    fontSize: 30,
    color: '#888',
    textAlign: 'right',
  },
  buttonsContainer: {
    flex: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 50,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  equalsButton: {
    backgroundColor: '#f09a36',
  },
});
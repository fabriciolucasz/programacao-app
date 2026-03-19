import { useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";

export default function CalculatorPage() {
  const [numberOne, setNumberOne] = useState('');
  const [numberTwo, setNumberTwo] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    Keyboard.dismiss();

    const x = parseFloat(numberOne.replace(',', '.')) || 0;
    const y = parseFloat(numberTwo.replace(',', '.')) || 0;

    if (numberOne === null || numberTwo === null) {
      setResult(null);
      throw new Error("Preencha os dois campos");
    }

    if (isNaN(x) || isNaN(y)) {
      throw new Error("Você precisa inserir um número válido");
    }

    const result = x + y;
    setResult(result);
  }

  const clear = () => {
    setNumberOne('');
    setNumberTwo('');
    setResult(null);
    setError('');
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lorem Ipsum</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 10,5"
        keyboardType="decimal-pad"
        value={numberOne}
        onChangeText={setNumberOne}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    alignItems: 'center'
  },

  title: {
    color: 'orange',
    fontSize: 24,
  },

  input: {
    color: 'orange',
    fontSize: 16,
  }
}) 
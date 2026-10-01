import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { numberToWords } from '../utils/numberToWords';

export default function WordsScreen() {
  const [numberInput, setNumberInput] = useState('');
  const [words, setWords] = useState('');

  const handleTranslate = () => {
    const textResult = numberToWords(numberInput);
    setWords(textResult);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Números a Letras</Text>
      <Text style={styles.instruction}>
        Ingrese un número entero del 1 al 1000:
      </Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="1 - 1000"
        value={numberInput}
        onChangeText={setNumberInput}
      />

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={handleTranslate}
      >
        <Text style={styles.buttonText}>Traducir</Text>
      </Pressable>

      {words !== '' && (
        <View style={styles.outputBox}>
          <Text style={styles.outputTitle}>En Letras:</Text>
          <Text style={styles.outputContent}>{words}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },
  instruction: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#f8fafc',
  },
  button: {
    backgroundColor: '#0284c7',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  outputBox: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#f0fdf4',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#bbf7d0',
  },
  outputTitle: {
    fontSize: 13,
    color: '#166534',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  outputContent: {
    fontSize: 18,
    fontWeight: '700',
    color: '#15803d',
    marginTop: 6,
    textTransform: 'capitalize',
  },
});
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function SumScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleSum = () => {
    const val1 = parseFloat(num1);
    const val2 = parseFloat(num2);

    if (isNaN(val1) || isNaN(val2)) {
      setResult('Por favor ingrese dos valores validos');
      return;
    }

    setResult(val1 + val2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Primer Número</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej: 15"
        value={num1}
        onChangeText={setNum1}
      />

      <Text style={styles.label}>Segundo Número</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej: 27"
        value={num2}
        onChangeText={setNum2}
      />

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={handleSum}
      >
        <Text style={styles.buttonText}>Sumar</Text>
      </Pressable>

      {result !== null && (
        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>Resultado:</Text>
          <Text style={styles.resultValue}>{result}</Text>
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
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 6,
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
    backgroundColor: '#2563eb',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultBox: {
    marginTop: 28,
    padding: 16,
    backgroundColor: '#eff6ff',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2563eb',
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  resultValue: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1e3a8a',
    marginTop: 4,
  },
});
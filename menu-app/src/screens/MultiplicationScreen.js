import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

export default function MultiplicationScreen() {
  const [factor, setFactor] = useState('7');
  const baseNumber = parseInt(factor, 10) || 0;

  // Static sequence: numbers 1 through 13
  const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tabla de Multiplicar</Text>
      <Text style={styles.subheading}>Ingrese un numero:</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={factor}
        onChangeText={setFactor}
        placeholder="Ej: 5"
      />

      <FlatList
        data={multipliers}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.formula}>
              {baseNumber} × {item}
            </Text>
            <Text style={styles.equals}>=</Text>
            <Text style={styles.result}>{baseNumber * item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f8fafc',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
  },
  subheading: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 14,
    marginTop: 4,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#ffffff',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  formula: {
    fontSize: 16,
    color: '#334155',
    fontWeight: '500',
    width: 100,
  },
  equals: {
    fontSize: 16,
    color: '#94a3b8',
  },
  result: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2563eb',
    width: 60,
    textAlign: 'right',
  },
});
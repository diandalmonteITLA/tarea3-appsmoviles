import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/profile.jpg')}
          style={styles.avatar}
          resizeMode="cover"
        />
        <Text style={styles.title}>Dian Delgado</Text>
        <Text style={styles.subtitle}>Matrícula: 2024-2385</Text>
        <Text style={styles.email}>20242385@itla.edu.do</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 28,
    alignItems: 'center',
    width: '100%',
    maxWidth: 340,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#cbd5e1',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748b',
    marginBottom: 6,
  },
  email: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '500',
  },
});
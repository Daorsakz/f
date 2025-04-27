import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Изображение профиля */}
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Anonymous_emblem.svg' }}
          style={styles.avatar}
        />
        
        {/* Имя и Фамилия */}
        <Text style={styles.name}>Оразалинов Даулет</Text>
        
        {/* Группа */}
        <Text style={styles.group}>Группа: CS-202(c)</Text>
        
        {/* Email */}
        <Text style={styles.email}>Email: adfkefk@mail.ru</Text>
        
        {/* Цитата */}
        <Text style={styles.quote}>
          "Мудрый человек требует всего только от себя, ничтожный же человек требует всего от других."
        </Text>
        
        {/* QR-код для email */}
        <View style={styles.qrContainer}>
          <QRCode value="mailto:adfkefk@mail.ru" size={150} />
        </View>
        
        {/* Текст для сканирования QR-кода */}
        <Text style={styles.scanText}>Отсканируй, чтобы написать 📧</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  group: {
    fontSize: 16,
    color: '#4a5568',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#3182ce',
    marginBottom: 15,
  },
  quote: {
    fontStyle: 'italic',
    color: '#718096',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  qrContainer: {
    backgroundColor: '#e2e8f0',
    padding: 10,
    borderRadius: 15,
  },
  scanText: {
    marginTop: 10,
    fontSize: 12,
    color: '#a0aec0',
  },
});

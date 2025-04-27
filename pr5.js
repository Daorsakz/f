import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Modal } from 'react-native';

const countries = [
  {
    name: 'Australia',
    capital: 'Canberra',
    population: 25687041,
    flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg',
  },
  {
    name: 'Brazil',
    capital: 'Brasília',
    population: 211049527,
    flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg',
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    population: 37742154,
    flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg',
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const nextCountry = () => {
    if (currentIndex < countries.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCountry = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const currentCountry = countries[currentIndex];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Флаг страны */}
        <Image source={{ uri: currentCountry.flagUrl }} style={styles.flag} />

        {/* Информация о стране */}
        <Text style={styles.name}>{currentCountry.name}</Text>
        <Text style={styles.info}>Capital: {currentCountry.capital}</Text>
        <Text style={styles.info}>Population: {currentCountry.population.toLocaleString()}</Text>

        {/* Кнопки для навигации */}
        <View style={styles.buttonContainer}>
          <Button title="Previous" onPress={prevCountry} disabled={currentIndex === 0} />
          <Button title="Next" onPress={nextCountry} disabled={currentIndex === countries.length - 1} />
        </View>

        {/* Модальное окно с дополнительной информацией */}
        <TouchableOpacity onLongPress={showModal}>
          <Text style={styles.tooltip}>Press and hold for more info!</Text>
        </TouchableOpacity>

        <Modal visible={isModalVisible} transparent={true} animationType="fade" onRequestClose={hideModal}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>More information about {currentCountry.name}...</Text>
            <Button title="Close" onPress={hideModal} />
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  flag: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  tooltip: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, useColorScheme } from 'react-native';
import { Button, Card, Paragraph, Title, Caption } from 'react-native-paper';

const facts = [
  {
    id: '1',
    date: '2025-04-01',
    title: 'Китай',
    imageUrl: 'https://via.placeholder.com/150?text=China',
    description: 'Китай — самая населённая страна в мире с более чем 1,4 миллиарда человек.',
  },
  {
    id: '2',
    date: '2025-04-02',
    title: 'Япония',
    imageUrl: 'https://via.placeholder.com/150?text=Japan',
    description: 'Япония известна своей высокоразвивающейся технологической отраслью и богатой культурой.',
  },
  {
    id: '3',
    date: '2025-04-03',
    title: 'Германия',
    imageUrl: 'https://via.placeholder.com/150?text=Germany',
    description: 'Германия — одна из самых развитых стран Европы с ведущей экономикой и культурой.',
  },
  {
    id: '4',
    date: '2025-04-04',
    title: 'Италия',
    imageUrl: 'https://via.placeholder.com/150?text=Italy',
    description: 'Италия известна своей историей, искусством и гастрономией.',
  },
  {
    id: '5',
    date: '2025-04-05',
    title: 'Франция',
    imageUrl: 'https://via.placeholder.com/150?text=France',
    description: 'Франция славится своей культурой, искусством, модой и кухней.',
  },
  {
    id: '6',
    date: '2025-04-06',
    title: 'Индия',
    imageUrl: 'https://via.placeholder.com/150?text=India',
    description: 'Индия — страна с уникальной культурой и многовековой историей.',
  },
  {
    id: '7',
    date: '2025-04-07',
    title: 'Россия',
    imageUrl: 'https://via.placeholder.com/150?text=Russia',
    description: 'Россия — крупнейшая страна по территории в мире с богатой культурой и историей.',
  },
  {
    id: '8',
    date: '2025-04-08',
    title: 'США',
    imageUrl: 'https://via.placeholder.com/150?text=USA',
    description: 'США — одна из самых влиятельных стран в мире с высокоразвитыми технологиями.',
  },
  {
    id: '9',
    date: '2025-04-09',
    title: 'Бразилия',
    imageUrl: 'https://via.placeholder.com/150?text=Brazil',
    description: 'Бразилия — крупнейшая страна в Южной Америке с богатой природой и культурой.',
  },
  {
    id: '10',
    date: '2025-04-10',
    title: 'Австралия',
    imageUrl: 'https://via.placeholder.com/150?text=Australia',
    description: 'Австралия известна своими уникальными животными, такими как кенгуру и коала.',
  },
  {
    id: '11',
    date: '2025-04-11',
    title: 'Канада',
    imageUrl: 'https://via.placeholder.com/150?text=Canada',
    description: 'Канада — страна с большими природными ресурсами и высококачественной медициной.',
  },
  {
    id: '12',
    date: '2025-04-12',
    title: 'Мексика',
    imageUrl: 'https://via.placeholder.com/150?text=Mexico',
    description: 'Мексика известна своей историей, музыкой и кухней.',
  },
  {
    id: '13',
    date: '2025-04-13',
    title: 'Аргентина',
    imageUrl: 'https://via.placeholder.com/150?text=Argentina',
    description: 'Аргентина — страна с прекрасными пейзажами, включая Патагонию и горы Анды.',
  },
  {
    id: '14',
    date: '2025-04-14',
    title: 'Южная Корея',
    imageUrl: 'https://via.placeholder.com/150?text=South+Korea',
    description: 'Южная Корея — высокоразвивающаяся страна с ведущими в мире технологиями.',
  },
  {
    id: '15',
    date: '2025-04-15',
    title: 'Иран',
    imageUrl: 'https://via.placeholder.com/150?text=Iran',
    description: 'Иран известен своей древней культурой, архитектурой и персидской историей.',
  },
  {
    id: '16',
    date: '2025-04-16',
    title: 'Египет',
    imageUrl: 'https://via.placeholder.com/150?text=Egypt',
    description: 'Египет — страна с удивительными памятниками, такими как пирамиды и Великий Сфинкс.',
  },
  {
    id: '17',
    date: '2025-04-17',
    title: 'Турция',
    imageUrl: 'https://via.placeholder.com/150?text=Turkey',
    description: 'Турция известна своей уникальной культурой, смешивающей восточные и западные элементы.',
  },
  {
    id: '18',
    date: '2025-04-18',
    title: 'Испания',
    imageUrl: 'https://via.placeholder.com/150?text=Spain',
    description: 'Испания славится своими пляжами, архитектурой и вкусной едой.',
  },
  {
    id: '19',
    date: '2025-04-19',
    title: 'Новая Зеландия',
    imageUrl: 'https://via.placeholder.com/150?text=New+Zealand',
    description: 'Новая Зеландия — страна с великолепной природой и множеством приключений на свежем воздухе.',
  },
  {
    id: '20',
    date: '2025-04-20',
    title: 'Южноафриканская Республика',
    imageUrl: 'https://via.placeholder.com/150?text=South+Africa',
    description: 'Южная Африка известна своей уникальной природой, включая знаменитый Крюгер-парк.',
  },
  {
    id: '21',
    date: '2025-04-21',
    title: 'Индонезия',
    imageUrl: 'https://via.placeholder.com/150?text=Indonesia',
    description: 'Индонезия — архипелаг с уникальной флорой и фауной, включающей такие виды, как орангутан.',
  },
  {
    id: '22',
    date: '2025-04-22',
    title: 'Великобритания',
    imageUrl: 'https://via.placeholder.com/150?text=UK',
    description: 'Великобритания — страна с богатой историей, культурой и традициями.',
  },
  {
    id: '23',
    date: '2025-04-23',
    title: 'Швеция',
    imageUrl: 'https://via.placeholder.com/150?text=Sweden',
    description: 'Швеция известна своим высококачественным уровнем жизни и устойчивой экологией.',
  },
  {
    id: '24',
    date: '2025-04-24',
    title: 'Норвегия',
    imageUrl: 'https://via.placeholder.com/150?text=Norway',
    description: 'Норвегия — страна с прекрасными фьордами и высоким качеством жизни.',
  },
  {
    id: '25',
    date: '2025-04-25',
    title: 'Филиппины',
    imageUrl: 'https://via.placeholder.com/150?text=Philippines',
    description: 'Филиппины славятся своими тропическими пляжами и живописными островами.',
  },
  {
    id: '26',
    date: '2025-04-26',
    title: 'Малайзия',
    imageUrl: 'https://via.placeholder.com/150?text=Malaysia',
    description: 'Малайзия — страна с красивыми пляжами, густыми лесами и современными городами.',
  },
  {
    id: '27',
    date: '2025-04-27',
    title: 'Тайланд',
    imageUrl: 'https://via.placeholder.com/150?text=Thailand',
    description: 'Тайланд славится своими пляжами, буддистскими храмами и вкусной кухней.',
  },
  {
    id: '28',
    date: '2025-04-28',
    title: 'Мьянма',
    imageUrl: 'https://via.placeholder.com/150?text=Myanmar',
    description: 'Мьянма известна своими историческими памятниками и буддистскими монастырями.',
  },
  {
    id: '29',
    date: '2025-04-29',
    title: 'Вьетнам',
    imageUrl: 'https://via.placeholder.com/150?text=Vietnam',
    description: 'Вьетнам известен своей природой, пляжами и богатой историей.',
  },
  {
    id: '30',
    date: '2025-04-30',
    title: 'Польша',
    imageUrl: 'https://via.placeholder.com/150?text=Poland',
    description: 'Польша славится своей историей, культурой и архитектурой.',
  },
];

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedFact, setSelectedFact] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedFact(item)}>
      <Card style={[styles.card, isDarkMode && styles.cardDark]}>
        <Card.Cover source={{ uri: item.imageUrl }} />
        <Card.Content>
          <Title>{item.title}</Title>
          <Caption>{item.date}</Caption>
          <Paragraph>{item.description}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <FlatList
        data={facts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      {selectedFact && (
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>{selectedFact.title}</Text>
          <Image source={{ uri: selectedFact.imageUrl }} style={styles.modalImage} />
          <Text style={styles.modalText}>{selectedFact.description}</Text>
          <Button mode="contained" onPress={() => setSelectedFact(null)}>
            Закрыть
          </Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  cardDark: {
    backgroundColor: '#1e1e1e',
  },
  modal: {
    position: 'absolute',
    top: '30%',
    left: '10%',
    right: '10%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 10,
  },
  modalImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 16,
    marginVertical: 10,
  },
});

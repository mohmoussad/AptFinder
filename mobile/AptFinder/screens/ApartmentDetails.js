import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const ApartmentDetails = ({ route }) => {
  const { id } = route.params;
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    axios.get(`http://10.0.2.2:5000/api/apartments/${id}`)
      .then(response => setApartment(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!apartment) return <Text>Loading...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{apartment.title}</Text>
      <Text style={styles.description}>{apartment.description}</Text>
      <Text style={styles.price}>${apartment.price}</Text>
      <View style={styles.imagesContainer}>
        {apartment.images.map(image => (
          <Image key={image.id} source={{ uri: image.url }} style={styles.image} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6347',
    marginBottom: 16,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: '48%',
    height: 150,
    marginBottom: 16,
    borderRadius: 8,
  },
});

export default ApartmentDetails;

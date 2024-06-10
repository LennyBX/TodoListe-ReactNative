import React, { useState } from 'react';
import { StyleSheet, Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Modal from './components/modal';
import ModalEdit from "./components/modalEdit";

export default function App() {
  const [objectifs, setObjectifs] = useState(['Réussir', 'Solitude', 'Amour', 'Tuerie', 'Killer']);
  const [nouvelObjectif, setNouvelObjectif] = useState('');
  const [selectedObjectifIndex, setSelectedObjectifIndex] = useState(null);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);

  const ajouterObjectif = () => {
    const nouveauxObjectifs = [...objectifs, nouvelObjectif];
    setObjectifs(nouveauxObjectifs);
    setNouvelObjectif('');
  };

  const supprimerObjectif = (index) => {
    setSelectedObjectifIndex(index);
    setModalDeleteVisible(true);
  };

  const editObjectif = (index) => {
    setSelectedObjectifIndex(index);
    setModalEditVisible(true);
  };

  const handleDeleteConfirmation = () => {
    if (selectedObjectifIndex !== null) {
      const nouveauxObjectifs = objectifs.slice();
      nouveauxObjectifs.splice(selectedObjectifIndex, 1);
      setObjectifs(nouveauxObjectifs);
      setSelectedObjectifIndex(null);
      setModalDeleteVisible(false);
    }
  };

  const handleEditConfirmation = (newObjectif) => {
    if (selectedObjectifIndex !== null) {
      const nouveauxObjectifs = objectifs.slice();
      nouveauxObjectifs[selectedObjectifIndex] = newObjectif;
      setObjectifs(nouveauxObjectifs);
      setSelectedObjectifIndex(null);
      setModalEditVisible(false);
    }
  };

  return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Todo Liste App</Text>
          <Image
              style={styles.image}
              source={{
                uri: 'https://user-images.githubusercontent.com/69080584/119517399-c6f10280-bda1-11eb-9af9-4bdc197dcd65.png',
              }}
          />
        </View>

        <View style={styles.blueBackground}>
          <TextInput
              style={styles.TextInputAjout}
              placeholder="Entrez votre objectif"
              value={nouvelObjectif}
              onChangeText={text => setNouvelObjectif(text)}
          />
          <TouchableOpacity onPress={ajouterObjectif} style={styles.buttonAjout}>
            <Text style={styles.buttonText}>Ajouter</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={modalDeleteVisible} onClose={() => setModalDeleteVisible(false)} onDelete={handleDeleteConfirmation} />
        <ModalEdit visible={modalEditVisible} onClose={() => setModalEditVisible(false)} onEdit={handleEditConfirmation} item={objectifs[selectedObjectifIndex]} />

        {objectifs.map((objectif, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.objectif}>{objectif}</Text>
              <TouchableOpacity onPress={() => editObjectif(index)}>
                <Image
                    style={styles.imageDelete}
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/3597/3597075.png',
                    }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => supprimerObjectif(index)} style={styles.buttonSupprimer}>
                <Image
                    style={styles.imageDelete}
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140207.png',
                    }}
                />
              </TouchableOpacity>
            </View>
        ))}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueBackground: {
    padding: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  TextInputAjout: {
    height: 40,
    width: 200,
    borderColor: 'transparent',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#f0f0f0',
    width: '80%',
    marginBottom: 15,
    borderRadius: 10,
    height: 65,
  },
  objectif: {
    color: 'black',
    fontSize: 18,
  },
  buttonAjout: {
    backgroundColor: '#6693D0',
    padding: 10,
    borderRadius: 5,
    width: 80,
    alignItems: 'center',
  },
  imageDelete: {
    width: 35,
    height: 35,
  },
  buttonSupprimer: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

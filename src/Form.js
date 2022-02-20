import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Keyboard
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { addList } from './actions/food';
import { msgTitle, msgProvider, msgText } from './message';

const Form = ({ navigation }) => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch();

  const submitclick = (name, breed, description) => {

    if (name == '') {
      msgProvider.toast(msgText.emptyName[0], 'center')
      return false;
    }

    if (breed == '') {
      msgProvider.toast(msgText.emptyBreed[0], 'center')
      return false;
    }

    if (description == '') {
      msgProvider.toast(msgText.emptyDescription[0], 'center')
      return false;
    }

    var array = {
      name: name,
      breed: breed,
      description: description
    }
    dispatch(addList(array))

    setName('')
    setBreed('')
    setDescription('')
  }

  console.log('submitclick', submitclick)
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex:0}}/>
        <StatusBar backgroundColor={'orange'} />
        <TouchableOpacity onPress={()=>{Keyboard.dismiss()}} activeOpacity={1} style={{backgroundColor:'white',flex:1}}></TouchableOpacity>
      <Image
        style={styles.image}
        source={require('./assets/logo.jpg')}
      />
      <Text style={styles.title}>Fill all details</Text>
      <TextInput
        value={name}
        placeholder='Name'
        style={styles.foodInput}
        onChangeText={(name) => setName(name)}
      />
      <TextInput
        value={breed}
        placeholder='Breed'
        style={styles.foodInput}
        onChangeText={(breed) => setBreed(breed)}
      />
      <TextInput
        value={description}
        multiline={true}
        placeholder='Description'
        style={styles.foodInput}
        onChangeText={(description) => setDescription(description)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submitclick(name, breed, description)

        }}>
        <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() =>
          navigation.navigate('List')}>
        <Text style={{ fontSize: 22, color: 'white' }}>Go to Pokedexlist</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    marginTop: 16,
    color: 'white'
  },
  foodInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderRadius: 100,
    resizeMode: 'contain'
  }
});

export default Form;

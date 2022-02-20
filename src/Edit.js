import React, { useState,useEffect } from 'react';
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
import { addList,editFood } from './actions/food';
import { useDispatch, useSelector } from 'react-redux';
import { msgTitle, msgProvider, msgText } from './message';

  
const Edit = (props) => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [description, setDescription] = useState('')
  

  const dispatch = useDispatch();

  const itemId = props.route.params.id;
  console.log('newitemid', itemId)
  const foods = useSelector(state => state.Reducer.List)
  console.log('getfoods', foods)
  //here get items for loop
  let items = foods;
  
  let itemList = [];
  useEffect(() => {
    console.log('inuseeffect')
    for (let i = 0; i < items.length; i++) {
      if (items[i].key == itemId) {
        
        let getName = items[i].name.name
        let getBreed = items[i].name.breed
        let getDescription = items[i].name.description
        
        setName(getName)
        setBreed(getBreed)
        setDescription(getDescription)
        
      }
    
  
  }
  });
  const updateclick = (name, breed, description) => {

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
    dispatch(editFood(itemId,array))

    setName('')
    setBreed('')
    setDescription('')
  }

  
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 0 }} />
      <StatusBar backgroundColor={'orange'} />
      <TouchableOpacity onPress={() => { Keyboard.dismiss() }} activeOpacity={1} style={{ backgroundColor: 'white', flex: 1 }}></TouchableOpacity>
      <Image
        style={styles.image}
        source={require('./assets/logo.jpg')}
      />
      <Text style={styles.title}>Edit all details</Text>
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
          updateclick(name, breed, description)

        }}>
        <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Update</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() =>
          navigation.navigate('List')}>
        <Text style={{ fontSize: 22, color: 'white' }}>Go to Pokedexlist</Text>
      </TouchableOpacity> */}

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

export default Edit;

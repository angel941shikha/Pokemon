import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFood,editFood } from './actions/food';

const List = ({ navigation }) => {

  const dispatch = useDispatch();

  const deleteCurrent = (key) => dispatch(deleteFood(key))
  const editCurrent = (key) => 
  {
    
 navigation.navigate('Edit',{'id':key})
  }

  const foods = useSelector(state => state.Reducer.List)
  

  return (
    
    <FlatList style={styles.listContainer}
      data={foods}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={
        
        (data) =>
      
        <View style={{backgroundColor:'orange',paddingVertical:10,borderRadius:5,flexDirection:'row',paddingHorizontal:5}}>
          <View style={{width:'75%'}}>
          <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>{data.item.name.name}</Text>
          <Text style={{fontSize:19,fontWeight:'bold',color:'white'}}>{data.item.name.breed}</Text>
          <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>{data.item.name.description}</Text>
          </View>
          <View style={{}}>
            <View style={{flexDirection:'row'}}> 
            <Icon
               name='delete'
               size={36}
               onPress={() => deleteCurrent(data.item.key)} />
               <Icon
               name='edit'
               size={36}
               onPress={() => editCurrent(data.item.key)} />
          
            </View>
          </View>
          
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#212121',
    padding: 16
  },
  listText: {
    fontSize: 30
  },
});

export default List;
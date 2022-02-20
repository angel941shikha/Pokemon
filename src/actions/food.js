import { ADD_FOOD, DELETE_FOOD,EDIT_FOOD } from './types';

export const addList = (name) => (
  {
    type: ADD_FOOD,
    data: name,
    
  }
);

export const deleteFood = (key) => (
  {
    type: DELETE_FOOD,
    key: key
  }
);


export const editFood = (key,name) => (
  {
    type: EDIT_FOOD,
    key: key,
    data:name
    
  }
);

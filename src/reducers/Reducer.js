import { ADD_FOOD, DELETE_FOOD,EDIT_FOOD } from '../actions/types';

const initialState = {
  List: []
}

const Reducer = (state = initialState, action) => {
  console.log('actions', action)
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        List: state.List.concat({
          key: Math.random(),
          name: action.data,

        })
      };
    case DELETE_FOOD:
      return {
        ...state,
        
        List: state.List.filter((item) =>
        
          item.key !== action.key)
      };

      case EDIT_FOOD:
       return updateObject(state, action)


    default:
      return state;
  }
}

function updateObject(array, action) {

  return array.List.map((item, index) => {
      if (item.key !== action.key) {
          return item
      }

      return {
          ...item,
          ...action.data
      }
  })
}

export default Reducer;
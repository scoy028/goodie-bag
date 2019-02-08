import Axios from "axios";

const initialState = {
  candies: []
}

//action type
const SHOW_ALL_CANDIES = 'SHOW_ALL_CANDIES'

//action creator
export const showAllCandies = (candies) => {
  return {type: SHOW_ALL_CANDIES, candies}
}

//thunk creator
export const fetchCandies = () => {
  return async function(dispatch) {
    const response = await Axios.get('api/candies')
    const candies = response.data
    const action = showAllCandies(candies)
    dispatch(action)
  }
}

//reducer
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_ALL_CANDIES: {
      return {...state, candies: action.candies};
    }
    default: {
      return state
    }
  }
}

export default rootReducer

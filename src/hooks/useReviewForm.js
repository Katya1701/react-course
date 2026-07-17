import { useReducer } from 'react';

const INITIAL_STATE = {
  name: '',
  text: '',
  rating: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    case 'SET_RATING':
      return { ...state, rating: action.payload };
    case 'RESET':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export function useReviewForm() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleNameChange = (e) => {
    dispatch({ type: 'SET_NAME', payload: e.target.value });
  };

  const handleTextChange = (e) => {
    dispatch({ type: 'SET_TEXT', payload: e.target.value });
  };

  const handleRatingIncrement = () => {
    if (state.rating < 5) {
      dispatch({ type: 'SET_RATING', payload: state.rating + 1 });
    }
  };

  const handleRatingDecrement = () => {
    if (state.rating > 1) {
      dispatch({ type: 'SET_RATING', payload: state.rating - 1 });
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    dispatch({ type: 'RESET' });
  };

  return {
    state,
    handleNameChange,
    handleTextChange,
    handleRatingIncrement,
    handleRatingDecrement,
    handleClear,
  };
}

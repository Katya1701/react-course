import { useReducer } from 'react';
import Counter from './Counter';

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

function ReviewForm() {
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

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h4>Оставить отзыв</h4>

      <div>
        <label>Имя:</label>
        <input type="text" value={state.name} onChange={handleNameChange} />
      </div>

      <div>
        <label>Текст :</label>
        <textarea value={state.text} onChange={handleTextChange} />
      </div>

      <div>
        <label>Рейтинг (1-5): </label>
        <Counter
          value={state.rating}
          onIncrement={handleRatingIncrement}
          onDecrement={handleRatingDecrement}
          min={1}
          max={5}
        />
      </div>

      <button onClick={handleClear}>Clear</button>
    </form>
  );
}

export default ReviewForm;

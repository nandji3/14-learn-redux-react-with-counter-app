import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();

  //useSelector --> is very useful hook for getting data from the store.
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.INC());  // Behind the seen redux create this like {type: SOME_UNIQUE_IDENTIFIER}
  }

  const incrementBySomeNoHandler = () => {
    dispatch(counterActions.INCBY(5)) // Behind the seen redux create this like {type: SOME_UNIQUE_IDENTIFIER, payload: 5}
  }

  const decrementHandler = () => {
    dispatch(counterActions.DEC()); // Behind the seen redux create this like {type: SOME_UNIQUE_IDENTIFIER}
  }

  const decrementBySomeNoHandler = () => {
    dispatch(counterActions.DECBY(5)) // Behind the seen redux create this like {type: SOME_UNIQUE_IDENTIFIER, payload: 5}
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())  // Behind the seen redux create this like {type: SOME_UNIQUE_IDENTIFIER}
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className='action_button'>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBySomeNoHandler}>Increment By 5</button>
        <button onClick={decrementBySomeNoHandler}>Decrement By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
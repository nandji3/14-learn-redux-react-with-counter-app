import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => { };
  //useSelector --> is very useFull hook for getting data from the store.
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INC" })
  }

  const incrementBySomeNoHandler = () => {
    dispatch({ type: "INCBY", payload: 5 })
  }

  const decrementHandler = () => {
    dispatch({ type: "DEC" })
  }

  const decrementBySomeNoHandler = () => {
    dispatch({ type: "DECBY", payload: 5 })

  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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

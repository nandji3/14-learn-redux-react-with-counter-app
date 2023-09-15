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
    dispatch({ type: "INCBY2", payload: 2 })
  }

  const decrementHandler = () => {
    dispatch({ type: "DEC" })
  }

  const decrementBySomeNoHandler = () => {
    dispatch({ type: "DECBY2", payload: 2 })

  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className='action_button'>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBySomeNoHandler}>Increment By 2</button>
        <button onClick={decrementBySomeNoHandler}>Decrement By 2</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

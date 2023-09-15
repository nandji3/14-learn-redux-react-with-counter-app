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

  const incrementBySomeThingHandler = () => {
    dispatch({ type: "INCBY5", payload: 10 })
  }

  const decrementHandler = () => {
    dispatch({ type: "DEC" })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBySomeThingHandler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

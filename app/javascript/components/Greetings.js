import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/features/slice';

const Greetings = () => {
  const dispatch = useDispatch();

  const fetchedGreeting = useSelector(
    (state) => state.greetings,
  );

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>React in Rails</h1>
      <p>
        {fetchedGreeting.greetings
          ? <p>{fetchedGreeting.greetings.greetings}</p>
          : <p>No greetings available.</p>}
      </p>
    </div>
  );
};

export default Greetings;

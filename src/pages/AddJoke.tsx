import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import useHttp from '../hooks/use-http';
import {addJoke} from '../utils/firebase-api';
import {IAddedJoke} from '../utils/firebase-api';
import JokeForm from '../components/jokes/JokeForm';

const AddJoke = () => {
  const navigate = useNavigate();
  const {sendHttpRequest, status} = useHttp(addJoke);

  useEffect(() => {
    if (status === 'completed') navigate('/jokes');
  }, [status, navigate]);

  const addJokeHandler = (joke: IAddedJoke) => {
    sendHttpRequest(joke);
  };

  return (
    <JokeForm onAddJoke={addJokeHandler} isLoading={status === 'pending'} />
  );
};

export default AddJoke;

import {Navigate, Route, Routes} from 'react-router-dom';
import Layout from './components/layout/Layout';
import AddJoke from './pages/AddJoke';
import JokeDetails from './pages/JokeDetails';
import NotFound from './pages/NotFound';
import ShowJokes from './pages/ShowJokes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='*' element={<NotFound />} />
        <Route index element={<Navigate to='jokes' replace />} />
        <Route path='jokes' element={<ShowJokes />} />
        <Route path='jokes/:id/*' element={<JokeDetails />} />
        <Route path='add-joke' element={<AddJoke />} />
      </Route>
    </Routes>
  );
}

export default App;

import StampCollection from './components/StampCollection';
import { useEffect, useState } from 'react';
import './App.css';

const stamps = [
  {
    image: "https://via.placeholder.com/150",
    name: "Stamp 1",
    description: "This is stamp 1",
    id: 1
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Stamp 2",
    description: "This is stamp 2",
    id: 2
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Stamp 3",
    description: "This is stamp 3",
    id: 3
  }
];

function App() {
  const [stamps, setStamps] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/stamps')
      .then((response) => response.json())
      .then((data) => setStamps(data));
  }, []);

  return (
    <div className="App">
      <h1> My Stamps </h1>
      <StampCollection stamps={stamps} />
    </div>
  );
}

export default App;

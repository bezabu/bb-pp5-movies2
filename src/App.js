import './App.css';
import NavBar from './components/NavBar';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1>Hello World!</h1>
        <Button variant="primary">Primary</Button>
      </header>
    </div>
  );
}

export default App;
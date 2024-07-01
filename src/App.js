import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className={styles.App}>
      <header>
        <NavBar />
        <br>
        </br><br></br><br></br><br></br>
        <h2>Hello World!</h2>
        <p>placeholder text</p>
        <a href="#">placeholder link</a>
        <br></br><br></br>
        <Button variant="light">Primary</Button>
      </header>
    </div>
  );
}

export default App;
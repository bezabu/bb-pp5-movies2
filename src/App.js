import styles from "./App.module.css";
import NavBar from "./components/NavBar";
//import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import { Route, Switch } from 'react-router-dom';
import  { NavLink }  from 'react-router-dom'
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";




function App() {
  

  

  return (

    <div className={styles.App}>
      
        <NavBar />
        <Container className={styles.Main}>
          <Switch>
            <Route exact path="/" render={() => <h2>Home</h2>} />
            <Route exact path="/signin" render={() => <SignInForm />} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route exact path="/popular" render={() => <h2>Popular users</h2>} />
            <Route exact path="/new" render={() => <h2>Newest reviews</h2>} />
            <Route exact path="/movies" render={() => <h2>Movies</h2>} />
            <Route render={() => <h2>Page not found!</h2> } />
          </Switch>
        </Container>
        <h2>Hello World!</h2>
        <p>placeholder text</p>
        <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/movies">Movies</NavLink>

      
    </div>

  );
}

export default App;
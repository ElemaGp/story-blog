import './App.css';
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";

import Create from "./components/create/Create";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import StoryDetails from './components/storyDetails/StoryDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <div className='content'>
      <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route path='/create'>
      <Create />
      </Route>
      <Route path='/contact'>
      <Contact />
      </Route>
      <Route path='/stories/:id'>
      <StoryDetails />
      </Route>
      
      </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
      

      

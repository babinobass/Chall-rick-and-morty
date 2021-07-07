import './App.css';
import { Route } from "react-router-dom"
import Home from './components/Home';
import Location from './components/Location';
import Navbar from './components/Navbar';
import Episode from './components/Episode';

function App() {
  return (
    <>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/page/:id' component={Home} />
      <Route exact path='/character/:name/:pages' component={Home} />
      <Route exact path='/location/:idLocation' component={Location} />
      <Route exact path='/episode/:idEpisode' component={Episode} />
      <footer> <a href="https://github.com/babinobass/Chall-rick-and-morty" >github </a></footer>
    </>
  );
}

export default App;

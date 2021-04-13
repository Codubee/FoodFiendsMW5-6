import './App.css';
import LandingPage from './views/LandingPage'
import Room from './views/Room'
import Match from './views/Match'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="content">
          <Switch> {/* Switch allows you to view one page at a time */}
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/room">
              <Room />
            </Route>
            <Route path="/match">
              <Match />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

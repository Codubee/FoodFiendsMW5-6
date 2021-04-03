import './App.css';
import LandingPage from './views/LandingPage'
import Room from './views/Room'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      {/* <LandingPage /> */}
      <Room/>
    </div>
  );
}

export default App;

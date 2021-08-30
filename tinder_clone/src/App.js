import './App.css';
import Header from './components/header/Header';
import SwipeButtons from './components/swipeButtons/SwipeButtons';
import TinderCards from './components/tinderCards/TinderCards';

function App() {
  return (
    //BEM class naming convention
    <div className="App">

      <Header />
      <TinderCards />
      <SwipeButtons />

    </div>
  );
}

export default App;

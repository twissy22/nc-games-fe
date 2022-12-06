import './App.css';
import Header from "./header"
import Reviews from "./reviews"
import Nav from './nav'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Nav />
      <Routes>
  <Route path="/" element={<Reviews />}/>
</Routes>
      </header>
    </div>
  );
}

export default App;

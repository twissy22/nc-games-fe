import './App.css';
import Header from "./header"
import Reviews from "./reviews"
import Review from "./review"
import Nav from './nav'
import {Routes, Route} from 'react-router-dom'
import Categories from './categories';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Nav />
      <Routes>
      <Route path="/category/:category"element={<Reviews />}/>
  <Route path="/" element={<Reviews />}/>
  <Route path="/reviews/:review_id" element={<Review />}/>
</Routes>
      </header>
    </div>
  );
}

export default App;

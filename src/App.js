import './App.css';
import Header from "./header"
import Reviews from "./reviews"
import Review from "./review"
import Nav from './nav'
import {Routes, Route} from 'react-router-dom'


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
  <Route path="*" element={<PageNotFound />} />
</Routes>
      </header>
    </div>
  );
}
function PageNotFound() {
  return (
    <div>
      <h2>404 Page not found</h2>
    </div>
  );
}
export default App;

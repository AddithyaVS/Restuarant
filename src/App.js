import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Foodinfo from './Foodinfo';

function App() {
  return (
    <Router className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={   <Home />}/>
        <Route path='/details/:id' element={<Foodinfo/>}/> 
      </Routes>
   
      <Footer></Footer>
    </Router>
  );
}

export default App;

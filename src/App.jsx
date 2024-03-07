
import Category from './components/Category';
import Searchbar from './components/Searchbar';
import Home from './pages/Home'; 
import Pages from './pages/Pages';
/* import { useParams } from "react-router-dom"; */
import './App.css'
import { BrowserRouter } from 'react-router-dom';


function App() {


  return (
    <BrowserRouter>    
    <Home />
    <Searchbar />
     <Pages />
     <Category />
   
   
   </BrowserRouter>
  )
}

export default App

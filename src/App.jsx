import NavCategory from './components/Nav-Category';
import Home from './pages/Home'
/* import Category from './components/Category'; */
import Searchbar from './components/Searchbar';
import Pages from './pages/Pages';
import './App.css'
import { BrowserRouter } from 'react-router-dom';


function App() {


  return (
    <BrowserRouter> 
    <NavCategory /> 
    <Searchbar />
    <Pages />
   {/*  <Category /> */}
   </BrowserRouter>
  )
}

export default App

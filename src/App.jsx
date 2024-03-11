
import Category from './components/Category';
import Searchbar from './components/Searchbar';
import Pages from './pages/Pages';
import './App.css'
import { BrowserRouter } from 'react-router-dom';


function App() {


  return (
    <BrowserRouter>    
    <Searchbar />
    <Pages />
    <Category />
   </BrowserRouter>
  )
}

export default App

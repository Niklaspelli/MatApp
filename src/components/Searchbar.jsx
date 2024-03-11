import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';

function Searchbar() {

const [input, setInput] = useState("");
const navigate = useNavigate();

const submitHandler = (e) => {
  e.preventDefault();
  navigate('/searched/'+input);
};



  return (
    <div>
       <FaSearch />
      <form onSubmit={submitHandler}>
     
      <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Sök din rätt här..." value={input}/>
      
      </form>
    </div>
  )
}

export default Searchbar

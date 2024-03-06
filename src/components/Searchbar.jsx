import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Searchbar() {

const [input, setInput] = useState("");
const navigate = useNavigate();

const submitHandler = (e) => {
  e.preventDefault();
  navigate('/searched/'+input);
};



  return (
    <div>
      <form onSubmit={submitHandler}>
      
      <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
      </form>
    </div>
  )
}

export default Searchbar

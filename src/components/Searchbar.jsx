import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function Searchbar() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null); 
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };


  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <div className='topnav'>
        <form onSubmit={submitHandler}>
          <FaSearch />
          <input
            ref={inputRef} // Reference the input element
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Sök här.."
            value={input}
            className='topnav'
          />
        </form>
      </div>
    </div>
  );
}

export default Searchbar;

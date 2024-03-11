import { Link } from "react-router-dom";



function NavCategory() {
  return (
    <nav className="nav">


    <ul>
      <Link to={"/"}>
     <h1>MatAppen</h1> 
     </Link>
      <Link to={'/meals/beef'}>
       <li>
        <h4 className="nav-button">Beef</h4>
       </li>
        
      </Link>
      <Link to={'/meals/Chicken'}>
        <li>
        <h4 className="nav-button">Chicken</h4>
</li>
      </Link>
      <Link to={'/meals/Lamb'}>
        <li>
        <h4 className="nav-button">Lamb</h4>
        </li>
</Link>
</ul>
</nav>
   
  )
}

export default NavCategory;
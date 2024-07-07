
import { useNavigate } from 'react-router-dom';
import './NavBar.scss'


function NavBar(){
    const navigate=useNavigate()
    return(
        <div className="navbar-container">
            <h1>Budgeting Application </h1>
            <button onClick={()=>{navigate(`/transactions/new`)}}>New Transaction</button>
            
             </div>
    )
}
export default NavBar;

import { useNavigate } from 'react-router-dom';
import './NavBar.scss'
import { Link } from 'react-router-dom';



function NavBar({total,color}){
    const navigate=useNavigate()
    return(
        <div className="navbar-container">
            <Link to={`/`}><h1>Budgeting Application </h1></Link>
            
            <button className='transactions' onClick={()=>{navigate(`/transactions`)}}>Transactions</button>
            <button className='newtransactions' onClick={()=>{navigate(`/transactions/new`)}}> New Transaction</button>

             </div>
    )
}
export default NavBar;
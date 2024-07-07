import './Transaction.scss'
import { Link } from 'react-router-dom'
function Transaction ({transaction}){
    return(
        <div className="transaction-container">
            <p>{transaction.date}</p>
            <Link to={`/transactions/${transaction.id}`}>
            <p>{transaction.item_name}</p></Link>
            
            <p>{transaction.amount}</p>
        </div>
    )
}
export default Transaction
import './Transaction.scss'
import { Link } from 'react-router-dom'
function Transaction ({transaction}){
    return(
       <>
           
                <td>  <p>{transaction.date}</p></td>
                <td> <Link to={`/transactions/${transaction.id}`}>
            <p>{transaction.item_name}</p></Link></td>
                <td>  <p>$ {transaction.amount}</p></td>
                </>
            
          
           
            
          
       
    )
}
export default Transaction
import { useNavigate, useParams } from "react-router-dom";
import './TransactionDetails.scss'
import { useEffect, useState } from "react";
function TransactionDetails(){
    const [transactionDetails,setTransactionDetails]=useState([])
    const [deleteConfirmation,setDeleteConfirmation]=useState(false)
    const API=import.meta.env.VITE_API_URL
    let navigate=useNavigate()
    let {id}=useParams()
    useEffect(()=>{
        console.log(API,id)
        fetch(`${API}/transactions/${id}`).then(res=>res.json()).then(res=>setTransactionDetails(res))

    },[id,navigate])
    function deleteTransaction(){
        fetch(`${API}/transactions/${id}`,{method:`DELETE`}).then(()=>navigate(`/transactions`)).catch(error=>console.error(error))

    }

    return (<div className="transactiondetails-container">
        <h3>Name of Transaction</h3>
        <p>{transactionDetails.item_name}</p>
        <h3>Amount</h3>

        <p>$ {transactionDetails.amount}</p>
        <h3>Date</h3>

        <p>{transactionDetails.date}</p>
        <h3>From</h3>

        <p>{transactionDetails.from}</p>
        <h3>Category</h3>

        <p>{transactionDetails.category}</p>

        <button className="edit" onClick={()=>navigate(`/transactions/${id}/edit`)}>Edit</button>
        <button className="delete" onClick={()=>setDeleteConfirmation(true)}>Delete</button>
        {deleteConfirmation?<div className="deleteConfirmation"> 
        <h3>Are you sure that you want to delete this transaction?</h3>

        <button onClick={()=>setDeleteConfirmation(false)} className="no">no</button>
        <button onClick={deleteTransaction} className="yes">yes</button>
         </div>:null
        }
       




    </div>)

}
export default TransactionDetails;
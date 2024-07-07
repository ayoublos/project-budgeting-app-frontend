import { useNavigate, useParams } from "react-router-dom";
import './TransactionDetails.scss'
import { useEffect, useState } from "react";
function TransactionDetails(){
    const [transactionDetails,setTransactionDetails]=useState([])
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
        <p>{transactionDetails.from}</p>
        <button onClick={()=>navigate(`/transactions/${id}/edit`)}>Edit</button>
        <button onClick={deleteTransaction}>Delete</button>




    </div>)

}
export default TransactionDetails;
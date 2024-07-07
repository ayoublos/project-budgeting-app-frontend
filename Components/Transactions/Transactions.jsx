import { useEffect, useState } from "react";
import Transaction from "../Transaction/Transaction";
import './Transactions.scss'
function Transactions() {
  const API = import.meta.env.VITE_API_URL;
  const [transactions, setTransaction] = useState([]);
  const sum=()=>transactions.reduce((acc,cur)=>acc+(+cur.amount),0)
  const [total, setTotal] = useState(0);
  const [color, setColor] = useState(``);
  function changeColor(total){
    if(total>100){
      setColor(`green`)
    }else if(total<0){
      setColor(`red`)
    }
    else if(total<100&&total>0){
      setColor(`yellow`)
    }
  }
  useEffect(() => {
    console.log(API);
    fetch(`${API}/transactions`)
      .then((res) => res.json())
      .then((res) => {setTransaction(res); setTotal(sum())
       changeColor(sum())
      }).catch(error=>console.error(`Error fetching`));
  }, [transactions.length]);



  return <div className="transactions-container">
          <h3 style={{backgroundColor:color}}>Bank Account Total is :{total}</h3>

{...transactions.map(transaction=>{
    return <div>
      <Transaction transaction={transaction}/>
    <hr /></div>
})}

  </div>;
}
export default Transactions;

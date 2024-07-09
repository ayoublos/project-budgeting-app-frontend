import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import './TransactionEditForm.scss'

function TransactionEditForm() {
  const API = import.meta.env.VITE_API_URL;
  let navigate = useNavigate();
  let {id}=useParams()

  const [transaction, setTransaction] = useState({
    id: id,
    item_name: "",
    amount: "",
    date: new Date().toLocaleDateString("en-US"),
    category: "",
    from: "",
  });
  useEffect(()=>{
      fetch(`${API}/transactions/${id}`).then(res=>res.json()).then(res=>setTransaction(res))
  },[id])
  function updateTransaction() {
  
      fetch(`${API}/transactions/${id}`, {
        method: `PUT`,
        body: JSON.stringify(transaction),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => setTransaction(res)).then(()=>navigate(`/transactions/${id}`)).catch(error=>console.error(error));
   ;
  }
//   useEffect(() => {
//     fetch(`${API}/transactions/${id}`, {
//       method: `PUT`,
//       body: JSON.stringify(transaction),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => setTransaction(res)).catch(error=>console.error(error));
//   },[id]);

  function handleChange(event) {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    updateTransaction()
    setTransaction({
        id: id,
        item_name: "",
        amount: "",
        date: new Date().toLocaleDateString("en-US"),
        category: "",
        from: "",
      })
    
  }

  return (
    <div className="transactioneditform-container">
    <h2>Update Transaction</h2>
  <form action="" onSubmit={handleSubmit}>
    <label htmlFor="">
        <h3>          Item Name
</h3>
      <br />
      <input placeholder="Name"
        type="text"
        id="item_name"
        value={transaction.item_name}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      
        <h3>Amount</h3>
      <br />
      <input placeholder="Amount"
        type="number"
        id="amount"
        value={transaction.amount}
        onChange={handleChange}
      />
    </label>
    <br />
    <label htmlFor="">
      <h3>From</h3>
      <br />
      <input placeholder="From"
        type="text"
        id="from"
        value={transaction.from}
        onChange={handleChange}
      />
    </label>
    <br />
    <label htmlFor="">
      <h3>Category</h3>
      <br />
      <input placeholder="Category"
        type="text"
        id="category"
        value={transaction.category}
        onChange={handleChange}
      />
    </label>
    <br />
    <button>Update Transaction</button>
  </form>
</div>
  );
}

export default TransactionEditForm;

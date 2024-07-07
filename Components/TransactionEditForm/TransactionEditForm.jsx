import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";

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
    <div className="transactionnewform-container">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Item Name
          <input
            type="text"
            id="item_name"
            value={transaction.item_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount
          <input
            type="text"
            id="amount"
            value={transaction.amount}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          From
          <input
            type="text"
            id="from"
            value={transaction.from}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Category
          <input
            type="text"
            id="category"
            value={transaction.category}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TransactionEditForm;

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import './TransactionNewForm.scss'

function TransactionNewForm() {
  const API = import.meta.env.VITE_API_URL;
  let navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    id: nanoid(3),
    item_name: "",
    amount: "",
    date: new Date().toLocaleDateString("en-US"),
    category: "",
    from:''
  });
  function addTransaction() {
    
    fetch(`${API}/transactions`, {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => navigate(`/transactions/${transaction.id}`))
      .catch((error) => console.error(error));
  }
  function handleChange(event) {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    addTransaction();
  }

  return (
    <div className="transactionnewform-container">
        <h2>Add a New Transaction</h2>
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
        <button>Create a New Transaction</button>
      </form>
    </div>
  );
}
export default TransactionNewForm;

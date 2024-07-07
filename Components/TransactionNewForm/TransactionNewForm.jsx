import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

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
            type="number"
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
export default TransactionNewForm;

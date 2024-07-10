import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from '../Components/NavBar/NavBar'
import HomePage from '../Pages/HomePage'
import TransactionNewForm from '../Components/TransactionNewForm/TransactionNewForm';
import TransactionEditForm from '../Components/TransactionEditForm/TransactionEditForm';
import TransactionDetails from '../Components/TransactionDetails/TransactionDetails';
import Transactions from '../Components/Transactions/Transactions';
import Error from '../Components/Error/Error';


function App() {



  return (
    <div className='app-container'>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/transactions/new' element={<TransactionNewForm/>} />
            <Route path='/transactions/:id' element={<TransactionDetails/>} />
            <Route path='/transactions/:id/edit' element={<TransactionEditForm/>} />
            <Route path='/*' element={<Error/>} />
        
          </Routes>
        </main>
     
      </Router>

    </div>

  )
}

export default App

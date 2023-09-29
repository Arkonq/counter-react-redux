import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import { fetchCustomers } from "./asyncAnctions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash); // state.reducerName.variableName
  const customers = useSelector(state => state.customers.customers); // state.reducerName.variableName
  const [ amount, setAmount ] = useState(0);

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload:cash});
  }
  
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload:cash});
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer));
  }

  const removeCustomer = (customer) => {
    console.log(customer);
    dispatch(removeCustomerAction(customer.id));
  }

  return (
    <div className="App">
        <div className="cash">Cash is: {cash}</div>
        <form action="" className="cashForm" onSubmit={(e) => e.preventDefault()}>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.valueAsNumber)}/>
          <div className="btns">
            <button onClick={() => addCash(amount)}>Income</button>
            <button onClick={() => getCash(amount)}>Outcome</button>
            <button onClick={() => addCustomer(prompt())}>Add customer</button>
            <button onClick={() => dispatch(fetchCustomers())}>Get customers from DB</button>
          </div>
          { customers.length > 0 ? 
          <div>
              {customers.map(customer => (
                  <div className="customer">{customer.name} <button onClick={() => removeCustomer(customer)}>Remove</button></div>
              ))}
          </div>
          :
          <div style={{fontSize:"2rem", margin:"20px 0"}}>
            Клиенты отсутствуют
          </div>
          }
        </form>
    </div>
  );
}

export default App;

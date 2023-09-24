import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);
  const [ amount, setAmount ] = useState(0);

  const addCash = (cash) => {
    dispatch({type:"ADD_CASH", payload:cash});
  }
  
  const getCash = (cash) => {
    dispatch({type:"GET_CASH", payload:cash});
  }

  return (
    <div className="App">
        <div className="cash">Cash is: {cash}</div>
        <form action="" className="cashForm" onSubmit={(e) => e.preventDefault()}>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.valueAsNumber)}/>
          <div className="btns">
            <button onClick={() => addCash(amount)}>Income</button>
            <button onClick={() => getCash(amount)}>Outcome</button>
          </div>
        </form>
    </div>
  );
}

export default App;

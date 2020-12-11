import './App.css';
import "bulma/css/bulma.css";
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0)

  const decrement = ()=> {
    setCounter(counter-1)
  } 

  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if(e.key == "Enter"){
      setCounter(parseInt(inputValue));
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-full">
            <div className="notification">
              <div className="columns">
                <div className="column is-half">

                  <div className="field has-addons">
                    <div className="control">
                      <input className="input" type="text" placeholder="Put a number"
                      value = {inputValue}
                      onChange = {(e)=>setInputValue(e.target.value)}
                      onKeyDown = {handleKeyDown}
                       />
                    </div>

                    <div className="control">
                      <a className="button is-info"
                      onClick={() => setCounter(parseInt(inputValue))}>Assign</a>
                    </div>
                  </div>

                  <div className="buttons has-addons">
                    <button className="button is-primary"
                    onClick = {()=>setCounter(counter+1)}

                    >Up</button>
                    <button className="button is-warning"
                    onClick = {decrement}

                    >Down</button>

                  </div>
                </div>
                <div className="column is-half has-text-centered">
                  <h1 className="Title">{counter}</h1>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}

export default App;

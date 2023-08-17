import { useState, useEffect } from "react";
import axios from 'axios';

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss';

function App() {
  const [text, setText] = useState('');

  const onChangeHandler = (e) => {
    setText(e.target.value);
  }
  //隨機使用者產生器api：https://randomuser.me/
  useEffect(() => {
    (async() => {
      const path = process.env.REACT_APP_PATH;
      const result = await axios.get(path);
      console.log(result);
      console.log(path);
      //此時會跑兩個result, 因為index.js檔案中有渲染<React.StrictMode>的關係
    })()
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi~ My name is Brianhaos!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-primary">Primary</button>
        {text}
        <Input id="sampleText" text="這是一個input"
         value={text} onChangeHandler={onChangeHandler} />

      </header>
    </div>
  );
}

export default App;

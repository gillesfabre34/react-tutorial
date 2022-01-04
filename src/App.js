import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import { Clock } from "./components/clock";
import { Temperature } from "./components/temperature";

function Welcome({name, children}) {
  return <div>
      <h1>Hello {name}</h1>
      <p>{children}</p>
  </div>
}

function App() {
  return (
    <div id="app" className="App">
        <Welcome name="aaa" />
        <Welcome name="zzz" />
        <Clock />
        <Temperature/>
    </div>
  );
}
export default App;

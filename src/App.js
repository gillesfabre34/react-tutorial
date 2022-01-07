import './App.css';
import { Clock } from "./components/clock";
import { Temperature } from "./components/temperature";
import { SearchList } from "./components/searchlist";
import { PRODUCTS } from "./data/products";
import { Counter } from "./components/counter";

function Welcome({name, children}) {
  return <div>
      <h1>Hello {name}</h1>
      <p>{children}</p>
  </div>
}

function App() {
  return (
    <div id="app" className="App">
        <Welcome name="zzz" />
        {/*<Clock />*/}
        <Temperature/>
        <SearchList products={PRODUCTS}/>
    </div>
  );
}
export default App;

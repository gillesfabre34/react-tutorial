import './App.css';
import { Clock } from "./components/clock";
import { Temperature } from "./components/temperature";
import { SearchList } from "./components/searchlist";
import { PRODUCTS } from "./data/products";
import { store } from "./store/store";
import { Counter } from "./components/counter";
import { createStore } from "@reduxjs/toolkit";
import { counterReducer } from "./store/counterSlice";

function Welcome({name, children}) {
    return <div>
        <h1>Hello {name}</h1>
        <p>{children}</p>
    </div>
}
function App() {
    // const unsubscribe = store.subscribe(() => {
    //     console.log('IDX STORE', store.getState())
    // })
    console.log('NITTTT', store.getState())
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

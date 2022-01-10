import './App.css';
import { Temperature } from "./components/temperature";
import { SearchComponent } from "./components/searchComponent";
import { PRODUCTS } from "./data/products";

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
            <SearchComponent products={PRODUCTS}/>
        </div>
    );
}
export default App;

import './App.css';
import { SearchComponent } from "./components/searchComponent";
import { store } from "./store/store";
import Users from "./components/users";

function App() {
    return (
        <div id="app" className="App row">
            {/*<Clock />*/}
            {/*<Temperature/>*/}
            <div className="col-md-7 border-end border-2">
                <div className="fw-bolder m-3">Products</div>
                <SearchComponent products={store.getState().products}/>
            </div>
            <div className="col-md-5">
                <div className="fw-bolder m-3">Users</div>
                <Users />
            </div>
        </div>
    );
}
export default App;

import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import { addOne, minusOne } from "./actions/counter";
import { useEffect } from "react";
import Counter from "./components/Counter";

function App() {
  useEffect(() => {
    setTimeout(() => {
      store.dispatch(addOne());
    }, 2000);
    
    setTimeout(() => {
      store.dispatch(minusOne());
    }, 5000);
  });
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </header>
      </div>
    </Provider>
  );
}

export default App;

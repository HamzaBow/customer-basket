import { CSSProperties } from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  const wrapperStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  }
  return (
    <div className="App">
      <div style={wrapperStyle}>
        <Products />
        <Cart />
      </div>
    </div>
  );
}

export default App;

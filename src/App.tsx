import { CSSProperties } from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  const wrapperStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  }
  const handleClick = () => {
    const colorScheme =
      document.documentElement.style.getPropertyValue("--color-scheme");
      console.log('cs:', colorScheme)
    if (colorScheme === "dark") {
      document.documentElement.style.setProperty("--color-scheme", "light");
      return;
    }
    document.documentElement.style.setProperty("--color-scheme", "dark");
  }
  return (
    <div className="App">
      <input type={"checkbox"} onClick={handleClick}/>
      <span>Dark Theme</span>
      <div style={wrapperStyle}>
        <Products />
        <Cart />
      </div>
    </div>
  );
}

export default App;

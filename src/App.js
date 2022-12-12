import "./sass/general.scss";
import Header from "./components/header";
import Menu from "./components/menu";
import Glass from "./components/glass";
import { useEffect, useState } from "react";

function App() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const cocktails = await (await fetch("assets/data.json")).json();
    setCocktails(cocktails);
  }

  return (
    <div>
      <div className="container">
        <Header />
        <div id="recipe">
          {cocktails && (<Menu cocktails={cocktails} />)}

          <Glass />
        </div>
      </div>
    </div>
  );
}

export default App;

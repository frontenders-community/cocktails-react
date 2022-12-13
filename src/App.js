import "./sass/general.scss";
import Header from "./components/header";
import Menu from "./components/menu";
import Glass from "./components/glass";
import { useEffect, useState } from "react";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const cocktails = await (await fetch("assets/data.json")).json();
    setCocktails(cocktails);
  }

  function handleSelectCocktail(index) {
    setSelectedIndex(index);
  }

  return (
    <main>
      <div className="container">
        <Header />
        <div id="recipe">
          {cocktails && (
            <Menu
              cocktails={cocktails}
              selectCocktail={handleSelectCocktail}
              selectedIndex={selectedIndex}
            />
          )}
          <Glass cocktail={cocktails[selectedIndex]} />
        </div>
      </div>
    </main>
  );
}

export default App;

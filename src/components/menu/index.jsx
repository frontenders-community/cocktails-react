const Menu = ({ cocktails, selectCocktail, selectedIndex }) => {
  const cocktailsMenu = cocktails.map((cocktail, index) => (
    <li key={index}>
      <a
        href=""
        className={index === selectedIndex ? "active" : ""}
        onClick={(e) => {
          e.preventDefault();
          selectCocktail(index);
        }}
      >
        {cocktail.name}
      </a>
    </li>
  ));

  return (
    <div id="cocktail-menu">
      <nav>
        <ul className="cocktail-list">{cocktailsMenu}</ul>
      </nav>
    </div>
  );
};

export default Menu;

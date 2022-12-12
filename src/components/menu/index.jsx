const Menu = ({ cocktails, selectCocktail }) => {
  const cocktailsMenu = cocktails.map((cocktail, index) => (
    <li key={index}>
      <a
        href=""
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

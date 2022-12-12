const Menu = ({ cocktails }) => {
    const cocktailsMenu = cocktails.map((cocktail, index) => (
        <li key={index}><a>{cocktail.name}</a></li>
    ));

    return (
        <div id="cocktail-menu">
            <nav>
                <ul className="cocktail-list">
                    {cocktailsMenu}
                </ul>
            </nav>
        </div>
    )
}

export default Menu;
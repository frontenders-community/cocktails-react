const Glass = ({ cocktail }) => {
  function initIngredients() {
    const ingredients = cocktail.ingredients;
    const totalParts = ingredients.reduce(
      (sum, ingredient) => sum + ingredient.part,
      0
    );
    return cocktail.ingredients.map((ingredient, index) => {
      const partPercentage = (ingredient.part * 100) / totalParts;
      const reverseIndex = cocktail.ingredients.length - 1 - index;
      const key = `${ingredient.name}-${index}`;
      return (
        <div
          key={key}
          className={`ingredient animated animated-${reverseIndex}`}
          style={{
            height: `${partPercentage}%`,
            backgroundColor: ingredient.color,
          }}
        >
          <p className="ingredient__description">
            {ingredient.part} part of {ingredient.name}
          </p>
        </div>
      );
    });
  }
  const ingredients = cocktail && initIngredients();

  return (
    <div className="glass-wrapper">
      <div className="glass">
        <div className="glass__inner" id="glass-inner">
          {ingredients}
        </div>
      </div>
      <div className="glass__base"></div>
    </div>
  );
};

export default Glass;

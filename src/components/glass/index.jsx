import Ingredient from "../ingredient";

const Glass = ({ cocktail }) => {
  function initIngredients() {
    const ingredients = cocktail.ingredients;
    const totalParts = ingredients.reduce(
      (sum, ingredient) => sum + ingredient.part,
      0
    );
    return cocktail.ingredients.map((ingredient, index) => {
      const key = `${ingredient.name.split(" ").join("-")}-${index}`;
      return (
        <Ingredient
          key={key}
          ingredient={ingredient}
          index={index}
          totalParts={totalParts}
          ingredientsLength={cocktail.ingredients.length}
        />
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

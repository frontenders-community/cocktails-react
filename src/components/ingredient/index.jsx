const Ingredient = ({ ingredient, index, totalParts, ingredientsLength }) => {
  const partPercentage = (ingredient.part * 100) / totalParts;
  const reverseIndex = ingredientsLength - index - 1;
  return (
    <div
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
};

export default Ingredient;

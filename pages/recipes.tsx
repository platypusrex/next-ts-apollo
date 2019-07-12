import React from 'react';
import Link from 'next/link';
import { useAllRecipes } from '../shared/hooks/recipe/useAllRecipes';

const Recipes: React.FC<{}> = () => {
  const { recipes } = useAllRecipes();

  return (
    <div>
      <h1>Some Sweet Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <div>
              <h4 style={{ marginBottom: 5 }}>{recipe.title}</h4>
              <span>{recipe.description}</span>
            </div>
          </li>
        ))}
      </ul>

      <Link href="/">
        <a>Go home</a>
      </Link>
    </div>
  );
};

export default Recipes;
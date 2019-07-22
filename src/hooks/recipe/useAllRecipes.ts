import { useQuery } from '@apollo/react-hooks';
import { QueryResult } from 'react-apollo';
import { allRecipesQuery } from '@constants/graphqlLoader';
import { AllRecipesQuery } from '@typings/generated';
import { Recipe } from '@typings/generated';

type AllRecipesQueryResult = Omit<QueryResult<AllRecipesQuery, {}>, 'data'>;
type UseAllRecipes = () => AllRecipesQueryResult & {
  recipes: Recipe[];
};

export const useAllRecipes: UseAllRecipes = () => {
  const { data, called, ...rest } = useQuery<AllRecipesQuery>(allRecipesQuery);

  const recipes =
    data &&
    data.getAllRecipes || [];

  return { recipes, ...rest };
};
import { QueryHookResult, useQuery } from 'react-apollo-hooks';
import { allRecipesQuery } from '../../utils/graphqlLoader';
import { AllRecipesQuery } from '../../types/generated';
import { Recipe } from '../../types/generated';

type AllRecipesQueryResult = Omit<QueryHookResult<AllRecipesQuery, {}>, 'data'>;
type UseAllRecipes = () => AllRecipesQueryResult & {
  recipes: Recipe[];
};

export const useAllRecipes: UseAllRecipes = () => {
  const { data, ...rest } = useQuery<AllRecipesQuery>(allRecipesQuery);

  const recipes =
    data &&
    data.getAllRecipes || [];

  return { recipes, ...rest };
};
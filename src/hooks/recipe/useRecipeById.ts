import { QueryHookResult, useQuery } from 'react-apollo-hooks';
import { RecipeByIdQuery, RecipeByIdQueryVariables, RecipeDetail } from '@typings/generated';
import { Omit } from '@typings/shared';
import { recipeByIdQuery } from '@constants/graphqlLoader';

type RecipeByIdResult = Omit<QueryHookResult<RecipeByIdQuery, RecipeByIdQueryVariables>, 'data'>;
type UseRecipeById = (recipeId: number | string) => RecipeByIdResult & {
  recipe?: RecipeDetail;
}

export const useRecipeById: UseRecipeById = (recipeId) => {
  const id = typeof recipeId === 'string' ? parseInt(recipeId, 10) : recipeId;

  const { data, ...rest } = useQuery<RecipeByIdQuery, RecipeByIdQueryVariables>(recipeByIdQuery, {
    variables: { recipeId: id },
  });

  const recipe =
    data &&
    data.getRecipeById;

  return { recipe, ...rest };
};

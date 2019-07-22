import { useQuery } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
import { recipeByIdQuery } from '@constants/graphqlLoader';
import { RecipeByIdQuery, RecipeByIdQueryVariables, RecipeDetail } from '@typings/generated';
import { Omit } from '@typings/shared';

type RecipeByIdResult = Omit<QueryResult<RecipeByIdQuery, RecipeByIdQueryVariables>, 'data'>;
type UseRecipeById = (recipeId: number | string) => RecipeByIdResult & {
  recipe?: RecipeDetail;
};

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

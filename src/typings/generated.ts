/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllRecipesQuery
// ====================================================

export interface AllRecipesQuery_getAllRecipes {
  __typename: "Recipe";
  id: string;
  title: string;
}

export interface AllRecipesQuery {
  getAllRecipes: AllRecipesQuery_getAllRecipes[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RecipeByIdQuery
// ====================================================

export interface RecipeByIdQuery_getRecipeById {
  __typename: "Recipe";
  id: string;
  title: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
}

export interface RecipeByIdQuery {
  getRecipeById: RecipeByIdQuery_getRecipeById;
}

export interface RecipeByIdQueryVariables {
  recipeId: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RecipeDetail
// ====================================================

export interface RecipeDetail {
  __typename: "Recipe";
  id: string;
  title: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Recipe
// ====================================================

export interface Recipe {
  __typename: "Recipe";
  id: string;
  title: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================

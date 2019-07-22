import IntrospectionResult from '../../schema.json';
import TypeDefs from '../../schema.graphql';

export const introspectionResult = IntrospectionResult;
export const typeDefs = TypeDefs;

export const mockResults = {
  getAllRecipes: [
    { id: 1, title: 'Pad Thai' },
    { id: 2, title: 'Chicken Fried Rice' }
  ],
};

export const apolloMocks = {
  Query: () => ({
    getAllRecipes: () => mockResults.getAllRecipes
  }),
};
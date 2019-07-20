import IntrospectionResult from '../../schema.json';

export const introspectionResult = IntrospectionResult;

export const apolloMocks = {
  Query: () => ({
    getAllRecipes: () => [{ id: 1, title: 'Pad Thai'}, { id: 2, title: 'Chicken Fried Rice' } ]
  }),
};
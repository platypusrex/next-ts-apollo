import React from 'react';
import { Link } from '../shared/components/Link';
import { useAllRecipes } from '../shared/hooks/recipe/useAllRecipes';
import styled from 'styled-components';

const RecipesWrapper = styled.div`
  font-family: Tahoma, sans-serif; 
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const PageTitle = styled.h1`
  margin: 0 20px 0 0;
  line-height: 42px;
`;

const List = styled.ul`
  padding: 12px;
  background: ${({ theme }) => theme.colors.secondary};
`;

const ListItem = styled.li`
  padding: 20px;
  list-style: none;
  background: ${({ theme }) => theme.colors.main};
  border-color: ${({ theme }) => theme.colors.secondary};
  
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  
  h4 {
    margin: 0 0 8px;
  }
`;

const Recipes: React.FC<{}> = () => {
  const { recipes } = useAllRecipes();

  return (
    <RecipesWrapper>
      <TitleWrapper>
        <PageTitle>Some Sweet Recipes</PageTitle>

        <Link href="/" size="large">Go home</Link>
      </TitleWrapper>

      <List>
        {recipes.map(recipe => (
          <ListItem key={recipe.id}>
            <h4 style={{ marginBottom: 5 }}>{recipe.title}</h4>
            <span>{recipe.description}</span>
          </ListItem>
        ))}
      </List>
    </RecipesWrapper>
  );
};

export default Recipes;
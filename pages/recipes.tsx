import React from 'react';
import { Layout } from '@components/Layout';
import { Link } from '@components/Link';
import { useAllRecipes } from '@hooks/recipe/useAllRecipes';
import styled from 'styled-components';

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
    <Layout title="Recipes">
      <TitleWrapper>
        <PageTitle>
          Some Sweet Recipes
        </PageTitle>
      </TitleWrapper>
      <List>
        {recipes.map(recipe => (
          <ListItem key={recipe.id}>
            <h4>{recipe.title}</h4>
            <span>{recipe.description}</span>
          </ListItem>
        ))}
      </List>

      <Link href="/" size="lg">Go home</Link>
    </Layout>
  );
};

export default Recipes;
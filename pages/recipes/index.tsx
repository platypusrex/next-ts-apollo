import React from 'react';
import { Layout } from '@components/Layout';
import { Link } from '@components/Link';
import { useAllRecipes } from '@hooks/recipe/useAllRecipes';
import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const PageTitle = styled.h1`
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
  background: #fff;
  
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  
  h4 {
    margin: 0;
    text-transform: uppercase;
  }
`;

const Recipes: React.FC<{}> = () => {
  const { recipes } = useAllRecipes();

  return (
    <Layout title="Recipes">
      <TitleWrapper>
        <PageTitle>Recipes</PageTitle>
      </TitleWrapper>

      <List>
        {recipes.map(recipe => (
          <ListItem key={recipe.id}>
            <Link href="/recipes/[id]" as={`recipes/${recipe.id}`}>
              <h4>{recipe.title}</h4>
            </Link>
          </ListItem>
        ))}
      </List>

      <Link href="/" size="lg" title="Home link">
        Go home
      </Link>
    </Layout>
  );
};

export default Recipes;
import React from 'react';
import { useRouter } from 'next/router';
import { useRecipeById } from '@hooks/recipe/useRecipeById';
import { Layout } from '@components/Layout';
import { PageTitle, TitleWrapper } from '@pages/recipes';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipeDetail: React.FC<{}> = () => {
  const { query: { id } } = useRouter();
  const recipeId = Array.isArray(id) ? id[0] : id;
  const { recipe } = useRecipeById(recipeId);

  if (!recipe) {
    return null;
  }

  return (
    <Layout title={`${recipe.title} detail`}>
      <TitleWrapper>
        <PageTitle>{recipe.title}</PageTitle>
      </TitleWrapper>

      <ContentWrapper>
        <p>Recipe name: {recipe.title}</p>
        <p>Recipe name: {recipe.description}</p>
        <p>Recipe name: {new Date(recipe.createdAt).toLocaleString()}</p>
      </ContentWrapper>
    </Layout>
  );
};

export default RecipeDetail;
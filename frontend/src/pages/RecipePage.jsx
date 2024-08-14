import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Text } from '@mantine/core';
import { getRecipeById } from '../services/recipeService';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getRecipeById(id).then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <Text weight={500} size="xl">{recipe.title}</Text>
      <Text>{recipe.ingredients}</Text>
      <Text>{recipe.instructions}</Text>
    </Container>
  );
};

export default RecipePage;

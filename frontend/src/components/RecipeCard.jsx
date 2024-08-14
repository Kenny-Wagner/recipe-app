import { Card, Text, Title, List, ListItem} from '@mantine/core';

const RecipeCard = ({ recipe }) => {
  return (
    <Card shadow="sm" padding="lg">
      <Title weight={500} size="lg">{recipe.title}</Title>
      <Text c="dimmed">{recipe.category}</Text>
      <Text> Ingredients:</Text>
      <List>
      {
        recipe.ingredients.map(ingredient=> {
          return (
            <ListItem>{ingredient}</ListItem>
          )
        })
      }
      </List>

    </Card>
  );
};

export default RecipeCard;

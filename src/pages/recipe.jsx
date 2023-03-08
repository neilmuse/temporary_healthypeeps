import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Outlet, useParams } from "react-router-dom";
import RECIPE_THEME from "../themes/recipe-theme";
import recipePic from "../assets/recipe-pic.jpg";
import nutriFacts from "../assets/nutrifacts.png";
import "./recipe.css";
import recipes from "../data/recipes.json";

const Recipe = () => {
  const { id } = useParams();
  const recipe = recipes[id];
  const macros = ["Protein", "Carbohydrate", "Fat"];
  const vals = [42, 120, 30];

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const imageHeight = isSmallScreen ? 100 : 140;

  return (
    <>
      <ThemeProvider theme={RECIPE_THEME}>
        <Paper variant="outlined">
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="hero"> {recipe.title} </Typography>
                    <div class="image-container">
                      <img src={recipe.image} alt="Recipe" />
                    </div>

                    <Typography variant="title">Brief Description</Typography>

                    <Typography variant="body1">
                      {recipe.description}
                    </Typography>

                    <nav aria-label="secondary mailbox folders">
                      <Typography variant="title">Ingredients</Typography>
                      <List>
                        {recipe.ingredients?.map((item, index) => (
                          <ListItemButton key={index}>
                            <ListItem>
                              <ListItemText primary={item} />
                            </ListItem>
                          </ListItemButton>
                        ))}
                      </List>
                    </nav>

                    <Typography variant="title">Macronutrients</Typography>

                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      {recipe?.macros?.map(({ name, value }, index) => (
                        <Grid item xs={12}>
                          <ListItemButton key={index}>
                            <ListItem>
                              <ListItemText primary={name} />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary={value} />
                            </ListItem>
                          </ListItemButton>
                        </Grid>
                      ))}
                    </Grid>

                    <Typography variant="title">Preparation</Typography>

                    <Typography variant="body1">
                      {recipe?.preparation}
                    </Typography>

                    <Typography variant="title">Nutrition Facts</Typography>

                    <div className="picture">
                      <img src={nutriFacts} alt="Nutrition Facts" />
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
      <Outlet />
    </>
  );
};

export default Recipe;


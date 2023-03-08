import React from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, List, ListItem, ListItemButton, ListItemText, ThemeProvider, Typography, useMediaQuery } from "@mui/material"
import { Outlet } from 'react-router-dom';
import RECIPE_THEME from "../themes/recipe-theme";
import recipePic from "../assets/recipe-pic.jpg"
import nutriFacts from "../assets/nutrifacts.png"
import "./recipe.css"
import recipes from "../data/recipes.json";

const Recipe = () => {
    const recipe = recipes[0]
    const macros = ['Protein', 'Carbohydrate', 'Fat']
    const vals = [42, 120, 30]

    const isSmallScreen = useMediaQuery('(max-width:600px)');
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
                                        <Typography variant="title"> {recipe.title} </Typography>
                                        <div class="image-container">
                                            <img src={recipe.image} alt="Recipe"/>
                                        </div>

                                        <Typography variant="title">
                                            Brief Description
                                        </Typography>

                                        <Typography variant="body1">
                                            {recipe.description}
                                        </Typography>

                                        <nav aria-label="secondary mailbox folders">
                                            <Typography variant="title">
                                                Ingredients
                                            </Typography>
                                            <List>
                                                {recipe.ingredients.map((item, index) => (
                                                    <ListItemButton key={index}>
                                                        <ListItem>
                                                            <ListItemText primary={item} />
                                                        </ListItem>
                                                    </ListItemButton>
                                                ))}
                                            </List>
                                        </nav>

                                        <Typography variant="title">
                                                Macronutrients
                                        </Typography>

                                        <Grid container justifyContent="space-between" alignItems="center">
                                            <Grid item xs={6}>
                                                {macros.map((item, index) => (
                                                    <ListItemButton key={index}>
                                                        <ListItem>
                                                            <ListItemText primary={item} />
                                                        </ListItem>
                                                    </ListItemButton>
                                                ))}
                                            </Grid>
                                            <Grid item xs={6}>
                                                {vals.map((item, index) => (
                                                    <ListItemButton key={index}>
                                                        <ListItem>
                                                            <ListItemText primary={item} />
                                                        </ListItem>
                                                    </ListItemButton>
                                                ))}
                                            </Grid>
                                        </Grid>

                                        <Typography variant="title">
                                            Preparation
                                        </Typography>

                                        <Typography variant="body1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </Typography>

                                        <Typography variant="title">
                                        Nutrition Facts
                                        </Typography>

                                        <div className="picture">
                                            <img src={nutriFacts} alt="Nutrition Facts"/>
                                        </div>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </ThemeProvider>
            <Outlet/>
        </>
    );
}

export default Recipe;
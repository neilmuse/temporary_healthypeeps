import React from "react";
import { Grid } from "@mui/material"
import { Outlet } from 'react-router-dom';
import SearchField from '../components/search-field.jsx'
import FilterCategory from '../components/filter-category.jsx'
import RecipeLayout from "./recipe-feed.jsx"

const Homepage = () => {
    return (
        <>
            <Grid container direction="row" alignItems="center" spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <SearchFField/>
                    <FilterCategory/>
                    <RecipeLayout/>
                </Grid>
            </Grid>
            <Outlet/>
        </>
    );
}

export default Homepage;
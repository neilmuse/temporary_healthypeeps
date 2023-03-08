import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import TopNavBar from "./components/appbar.jsx";
import AddDiscussion from "./components/add-discussion.jsx";
import SignupPage from "./pages/signup.jsx";
import LoginPage from "./pages/login.jsx";
import PageNotFound from "./pages/not-found.jsx";
import FeedLayout from "./pages/feed.jsx";
import RecipeLayout from "./pages/recipe-feed.jsx";
import RecipePage from "./pages/recipe.jsx";
import Homepage from "./pages/homepage.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopNavBar />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="feed" element={<FeedLayout />} />
            <Route path="recipe" element={<RecipeLayout />} />
            <Route path="recipepage/:id" element={<RecipePage />} />
            <Route path="home" element={<Homepage />} />
            <Route path="add-discussion" element={<AddDiscussion />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);


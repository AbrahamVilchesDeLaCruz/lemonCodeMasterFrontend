import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGitHubClick = () => {
    navigate("/list");
  };

  const handleRickMortyClick = () => {
    navigate("/rickMorty");
  };

  return (
    <div className="center">
      <Typography variant="h3">Home Page</Typography>
      <div className="card-container">
        <Card className="card" onClick={handleGitHubClick}>
          <CardMedia
            component="img"
            image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="card-media"
          />
          <CardContent className="content">
            <Typography variant="h5">Open GitHub Organization</Typography>
            <span className="link">Go to GitHub</span>
          </CardContent>
        </Card>
        <Card className="card" onClick={handleRickMortyClick}>
          <CardMedia
            component="img"
            image="https://rickandmortyapi.com/api/character/avatar/361.jpeg"
            alt="Rick and Morty"
            className="card-media"
          />
          <CardContent className="content">
            <Typography variant="h5">Open Rick and Morty</Typography>
            <span className="link">Go to Rick and Morty</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

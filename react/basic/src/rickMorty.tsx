import React, { useState, useEffect } from "react";
import { Typography, Box, Button, TextField } from "@mui/material";
import { useDebounced } from "./hook/useDebounced";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const RickyMortyPage: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounced(searchTerm, 500); 
  const [nextUrl, setNextUrl] = useState<string>("");
  const [prevUrl, setPrevUrl] = useState<string>("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${debouncedSearchTerm}`
        );
        const data = await response.json();
        setCharacters(data.results);
        setNextUrl(data.info.next);
        setPrevUrl(data.info.prev);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [debouncedSearchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePreviousPage = async () => {
    try {
      const response = await fetch(prevUrl);
      const data = await response.json();
      setCharacters(data.results);
      setNextUrl(data.info.next);
      setPrevUrl(data.info.prev);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const handleNextPage = async () => {
    try {
      const response = await fetch(nextUrl);
      const data = await response.json();
      setCharacters(data.results);
      setNextUrl(data.info.next);
      setPrevUrl(data.info.prev);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  return (
    <>
      <Typography variant="h2" display="flex" alignItems="center" justifyContent="center" width="100%">Hello from Rick and Morty page</Typography>
      <Box display="flex" alignItems="center" justifyContent="center" width="100%" mt={2} mb={2}>
        <TextField
          type="text"
          placeholder="Search character"
          value={searchTerm}
          onChange={handleSearchChange}
          variant="outlined"
          size="small"
          sx={{ mr: 1 }}
        />
      </Box>
      <div className="grid-container">
        {characters.map((character) => (
          <div key={character.id} className="card-rickMorty">
            <img src={character.image} alt={character.name} />
            <div className="info-overlay">
              <Box mt={3}>
                <Typography variant="h4">User Id: {character.id}</Typography>
                <Typography variant="h5">Name: {character.name}</Typography>
                <Typography variant="h6">Status: {character.status}</Typography>
                <Typography variant="h6">Species: {character.species}</Typography>
                <Typography variant="h6">Gender: {character.gender}</Typography>
              </Box>
            </div>
          </div>
        ))}
      </div>
      <Box display="flex" alignItems="center" justifyContent="center" width="100%" mt={2} mb={2}>
        <Button variant="contained" onClick={handlePreviousPage} size="small">
          <ArrowBackIcon />
        </Button>
        <Typography variant="body1" fontWeight="bold" marginLeft={2} marginRight={2}>
          {/* Page {parseInt(nextUrl[-1]) - 1 || 1} */}
        </Typography>
        <Button variant="contained" onClick={handleNextPage} size="small">
          <ArrowForwardIcon />
        </Button>
      </Box>
    </>
  );
};

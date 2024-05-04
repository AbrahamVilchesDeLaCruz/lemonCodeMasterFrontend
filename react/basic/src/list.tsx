import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, TextField, Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

interface PropsSearch {
  onSearch: (organization: string) => void;
  org: string;
}

const SearchInput: React.FC<PropsSearch> = (props) => {
  const { onSearch, org } = props;
  const [organization, setOrganization] = React.useState<string>(org);

  const handleSearch = () => {
    onSearch(organization);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" width="100%" mt={2} mb={2}>
      <TextField
        type="text"
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
        variant="outlined"
        size="small"
        sx={{ mr: 1 }}
      />
      <Button variant="contained" onClick={handleSearch} size="small">
        Search
      </Button>
    </Box>
  );
};

export const ListPage: React.FC = () => {
  const { state } = useLocation();
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organization, setOrganization] = React.useState<string>(state?.org || "lemoncode");
  const [page, setPage] = React.useState<number>(1);
  const usersPerPage = 10;

  React.useEffect(() => {
    fetch(
      `https://api.github.com/orgs/${organization}/members?per_page=${usersPerPage}&page=${page}`
    )
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [organization, page]);

  const handleSearch = (org: string) => {
    setOrganization(org);
    setPage(1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <h2>Hello from List page</h2>
      <SearchInput onSearch={handleSearch} org={organization} />
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} alt="avatar" />
            <span>{member.id}</span>
            <Link to={`/detail/${organization}/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <Box display="flex" alignItems="center" justifyContent="center" width="100%" mt={2} mb={2}>
        <Button variant="contained" onClick={handlePreviousPage} size="small">
          <ArrowBackIcon />
        </Button>
        <Typography variant="body1" fontWeight="bold" marginLeft={2} marginRight={2}>
          Page {page}
        </Typography>
        <Button variant="contained" onClick={handleNextPage} size="small">
          <ArrowForwardIcon />
        </Button>
      </Box>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};

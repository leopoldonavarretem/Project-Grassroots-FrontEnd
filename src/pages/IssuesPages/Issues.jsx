//Imports
import { useState, useEffect } from "react";
import axios from "axios";

//Component imports
import Container from "@mui/material/Container";
import IssuesCard from "../../components/IssuesPage/IssuesCard";

function Issues(props) {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5005/api/issues").then((issues) => {
      setIssues(issues.data);
    });
  }, []);


  function showAllCards() {
    return issues.map((issue) => {
      return <IssuesCard data={issue} key={issue._id}/>;
    });
  }

  return (
    <Container>
      <h3>Explore Issues</h3>
      {showAllCards()}
    </Container>
  );
}

export default Issues;

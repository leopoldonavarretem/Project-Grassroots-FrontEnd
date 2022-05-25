//Imports
import { useState, useEffect } from "react";
import axios from "axios";

//Component imports
import Container from "@mui/material/Container";
import GroupsCard from "../../components/GroupsPage/GroupsCard";

function Groups(props) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5005/api/groups").then((groups) => {
      setGroups(groups.data);
      console.log(groups.data)
    });
  }, []);

  function showAllGroups() {
    return groups.map((group) => {
      return <GroupsCard data={group} />;
    });
  }

  return (
    <Container>
      <h3>Explore Popular Groups</h3>
      {showAllGroups()}
    </Container>
  );
}

export default Groups;

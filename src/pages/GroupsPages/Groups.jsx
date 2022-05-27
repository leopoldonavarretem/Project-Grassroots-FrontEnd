//Imports
import { useState, useEffect } from "react";
import axios from "axios";

//Component imports
import Container from "@mui/material/Container";
import GroupsCard from "../../components/GroupsPage/GroupsCard";
import Grid from "@mui/material/Grid"

function Groups(props) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/groups`).then((groups) => {
      setGroups(groups.data);
    });
  }, []);

  function showAllGroups() {
    return groups.map((group) => {
      return (
        <Grid item xs={4}>
      <GroupsCard data={group} key={group._id} user={props.user}/>
        </Grid>
    )});
  }

  return (
    <Container>
      <h3>Explore Popular Groups</h3>
      <Grid container spacing={2}>
      {showAllGroups()}

      </Grid>
    </Container>
  );
}

export default Groups;

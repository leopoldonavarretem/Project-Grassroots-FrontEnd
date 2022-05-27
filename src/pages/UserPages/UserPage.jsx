//Imports
import axios from "axios";
import { useState, useEffect } from "react";

//Component Imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, CardActionArea, CardActions } from "@mui/material";
import GroupsCard from "../../components/GroupsPage/GroupsCard";

function UserPage(props) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/user/${props.user._id}`)
      .then((user) => {
        setGroups(user.data.groupsJoinedId);
      });
  }, []);

  function showAllGroups() {
    return groups.map((group) => {
      return (
        <Grid item xs={6}>
          <GroupsCard data={group} key={group._id} user={props.user} />
        </Grid>
      );
    });
  }

  return (
    <Container sx={{ m: 1 }}>
      <Grid container spacing={1}>

        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={props.user.profilePic}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.user.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.user.userDescription}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Twitter: {props.user.twitter}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={8} sx={{ flexGrow: 1 }}>

          <Card sx={{ textAlign: "center" }}>
            <Typography variant="h5">
              Groups this user is interested in:
            </Typography>
          </Card>


          <Grid container>
          {showAllGroups()}
          </Grid>


        </Grid>
      </Grid>
    </Container>
  );
}

export default UserPage;

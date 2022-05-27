//Imports
import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import banner from "./banner-womens-march.jpg";

//Import Components
import GroupsCard from "../../components/GroupsPage/GroupsCard";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function HomePage(props) {
  const [groups, setGroups] = useState();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/home`).then((groups) => {
      setGroups(groups);
    });
  }, []);

  function showAllGroups() {
    return groups.map((group) => {
      return <GroupsCard data={group} />;
    });
  }

  const styles = {
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    overlay: {
      position: "relative",
      top: "20px",
      left: "20px",
      color: "black",
      backgroundColor: "white",
    },
  };

  return (
    <Container maxWidth="xl">
      <Card sx={{ width: `auto` }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="500"
            image={banner}
            alt="green iguana"
            styles={styles.media}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: 200,
              left: 450,
              right: "50%",
              width: 500,
              bgcolor: "rgba(0, 0, 0, 0.54)",
              color: "rgb(220,255,0)",
              padding: "10px",
              borderRadius: 25,
            }}
          >
            <Typography variant="h1">GrassRoots</Typography>
          </Box>
        </Box>
      </Card>
      
      <Card sx={{ width: `auto` }}>
        
      </Card>
    </Container>
  );
}

export default HomePage;

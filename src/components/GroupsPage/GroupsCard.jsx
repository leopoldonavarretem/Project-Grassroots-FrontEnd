import { Link } from "react-router-dom";
import axios from "axios";

//Component Imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function GroupsCard(props) {
  const { groupDescription, groupName, groupImage, _id } = props.data;

  const addedGroup = {
    group: `${_id}`,
    user: `${props.user._id}`,
  };

  function hello() {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/addgroup`, addedGroup)
  }

  return (
    <Card sx={{ maxWidth: "auto", m: 1, height: 300 }}>
      <Link to={`/groups/${_id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          height="140"
          image={groupImage}
          alt="Event cover"
        />
      </Link>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {groupName}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {groupDescription}
        </Typography>
        <CardActions>
          <Button onClick={hello}>Join</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default GroupsCard;

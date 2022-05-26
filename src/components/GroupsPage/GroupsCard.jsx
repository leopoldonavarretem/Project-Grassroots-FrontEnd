import { Link } from "react-router-dom";

//Component Imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function GroupsCard(props) {
  const { groupDescription, groupName, groupImage, _id } = props.data;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/groups/${_id}`}>
        <CardMedia
          component="img"
          height="140"
          image={groupImage}
          alt="Event cover"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {groupName}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {groupDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Join</Button>
        </CardActions>
      </Link>
    </Card>
  );
}

export default GroupsCard;

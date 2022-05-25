//Imports
import { Link } from "react-router-dom";

//Component Imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function EventsCard(props) {
  const { eventDescription, eventName, eventImage, _id } = props.data;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/events/${_id}`}>
        <CardMedia
          component="img"
          height="140"
          image={eventImage}
          alt="Event cover"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {eventName}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {eventDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Join</Button>
        </CardActions>
      </Link>
    </Card>
  );
}

export default EventsCard;

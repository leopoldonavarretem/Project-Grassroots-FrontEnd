//Imports
import { Link } from "react-router-dom";

//Component Imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function IssuesCard(props) {
  console.log(props)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/issues/${props.data._id}`}>
        <CardMedia
          component="img"
          height="140"
          image={props.data.issueImage}
          alt="Issue cover"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.issueName}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {props.data.issueDescription}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

export default IssuesCard;

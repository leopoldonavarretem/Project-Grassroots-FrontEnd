//Imports
import { Link } from "react-router-dom";

//Component Imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function IssuesCard(props) {
  const {issueImage, issueName, issueDescription, _id}=props.data
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/issues/${_id}`}>
        <CardMedia
          component="img"
          height="140"
          image={issueImage}
          alt="Issue cover"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {issueName}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {issueDescription}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

export default IssuesCard;

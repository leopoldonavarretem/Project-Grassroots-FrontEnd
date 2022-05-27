//Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Component Imports
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { Redirect, useNavigate } from "react-router-dom";

function GroupsIndividual(props) {
  const { groupId } = useParams();

  const [comments, setComments] = useState([]);
  const [data, setData] = useState([]);

  const [comment, setComment] = useState("");
  const handleCommentInput = (e) => setComment(e.target.value);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/groups/group/${groupId}`)
      .then((groupInfo) => {
        setData(groupInfo.data);
        setComments(groupInfo.data.posts);
      });
  }, []);

  function submitComment() {
    const body = {
      userId: `${props.user._id}`,
      groupId: `${data._id}`,
      postText: `${comment}`,
      userName: `${props.user.username}`
    };

    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/group/group/comments`,
      body
    ).then(()=>navigate('/groups/'))

  }

  function showAllComments() {
    return comments.map((comment) => {
      return (
        <Card sx={{ mb: 1 }} key={comment._id}>
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              {comment.userName}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {comment.postText}
            </Typography>
          </CardContent>
        </Card>
      );
    });
  }

  return (
    <Container sx={{ m: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={data.groupImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.groupName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.groupDescription}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.webpage}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={8}>
          {showAllComments()}
          <Card>
            <CardContent>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Add Comment
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={comment}
                  onChange={handleCommentInput}
                  label="Add Comment"
                />
              </FormControl>{" "}
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={submitComment}>
                Submit Comment
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GroupsIndividual;

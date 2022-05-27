//Imports
import { useState, useEffect } from "react";
import axios from "axios";
import redirect from "react-router-dom";

//Import Components
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import LoginIcon from "@mui/icons-material/Login";
import CardContent from "@mui/material/CardContent";
import { Redirect, useNavigate } from "react-router-dom";


//Styles
const Hide = styled("input")({
  display: "none",
});

function GroupsCreate(props) {
  //All Use States
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupImage, setGroupImage] = useState("");
  const [groupIssue, setGroupIssue] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  //Set Values
  const handleGroupNameInput = (e) => setGroupName(e.target.value);
  const handleGroupDescriptionInput = (e) =>
    setGroupDescription(e.target.value);
  const handleGroupImageInput = (e) => setGroupImage(e.target.value);
  const handleGroupIssueInput = (e, newValue) => {
    setGroupIssue(newValue.value);
  };
  const handleGroupCityInput = (e) => setCity(e.target.value);
  const handleGroupStateInput = (e) => setState(e.target.value);
  const navigate = useNavigate();

  const issuesList = [];

  const newGroup = {
    owner: "628ba09134be56f3edd87c34",
    administrators: "628ba09134be56f3edd87c34",
    location: {
      city: city,
      state: state,
    },
    groupDescription: groupDescription,
    groupName: groupName,
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/issues`).then((issues) => {
      issues.data.map((issue) => {
        issuesList.push({ label: `${issue.issueName}`, value: `${issue._id}` });
      });
    });
  }, []);

  //TODO: Add recirect
  const submitForm = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/groups/create`, newGroup)
      .then(()=>navigate('/groups'));
  };

  return (
    <Container sx={{ m: 1 }}>
      <Card sx={{ width: "40%", ml: 60, mt: 10 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <h2>Create a new group</h2>
          <TextField
            id="outlined-basic"
            label="Group Name"
            value={groupName}
            onChange={handleGroupNameInput}
            variant="outlined"
            sx={{ width: 300 }}
          />

          <br />

          <TextField
            id="outlined-basic"
            label="Group Description"
            variant="outlined"
            value={groupDescription}
            onChange={handleGroupDescriptionInput}
            sx={{ m: 1, width: 300 }}
          />

          <br />

          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            sx={{ width: 150 }}
            value={city}
            onChange={handleGroupCityInput}
          />

          <TextField
            id="outlined-basic"
            label="State"
            variant="outlined"
            sx={{ width: 100 }}
            value={state}
            onChange={handleGroupStateInput}
          />
          <br />

          {/* <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={issuesList}
        sx={{ width: 300 }}
        label="Choose Issue"
        onChange={handleGroupIssueInput}
        renderInput={(params) => <TextField {...params} />}
      /> */}

          <label htmlFor="contained-button-file">
            <Hide
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button variant="contained" component="span" sx={{ m: 1 }}>
              Upload a banner!
            </Button>
          </label>

          <br />

          <Button
            sx={{ width: 300, m: 1 }}
            variant="contained"
            onClick={submitForm}
          >
            Create Group!
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default GroupsCreate;

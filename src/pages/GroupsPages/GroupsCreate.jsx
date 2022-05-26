//Imports
import { useState, useEffect } from "react";
import axios from "axios";
import redirect from "react-router-dom";

//Import Components
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

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
    axios.post(`${process.env.REACT_APP_SERVER_URL}/groups/create`, newGroup).then();
  };

  return (
    <Container>
      <h2>Create a New Group!</h2>

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
      />

      <br />

      <TextField
        id="outlined-basic"
        label="City"
        variant="outlined"
        sx={{ width: 130 }}
        value={city}
        onChange={handleGroupCityInput}
      />

      <TextField
        id="outlined-basic"
        label="State"
        variant="outlined"
        sx={{ width: 130 }}
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
        <Button variant="contained" component="span">
          Upload a banner!
        </Button>
      </label>

      <br />

      <Button sx={{ width: 300 }} variant="contained" onClick={submitForm}>
        Create Group!
      </Button>
    </Container>
  );
}

export default GroupsCreate;

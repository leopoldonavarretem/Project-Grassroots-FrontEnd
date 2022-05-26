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

function EventsCreate(props) {
  //All Use States
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventIssue, setEventIssue] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  //Set Values
  const handleEventNameInput = (e) => setEventName(e.target.value);
  const handleEventpDescriptionInput = (e) =>
    setEventDescription(e.target.value);
  const handleEventImageInput = (e) => setEventImage(e.target.value);
  const handleEventIssueInput = (e, newValue) => {
    setEventIssue(newValue.value);
  };
  const handleGroupCityInput = (e) => setCity(e.target.value);
  const handleGroupStateInput = (e) => setState(e.target.value);

  const issuesList = [];

  const newEvent = {
    owner: "628ba09134be56f3edd87c34",
    administrators: "628ba09134be56f3edd87c34",
    location: {
      city: city,
      state: state,
    },
    eventDescription: eventDescription,
    eventName: eventName,
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
    axios.post(`${process.env.REACT_APP_SERVER_URL}/events/create`, newEvent).then();
  };

  return (
    <Container>
      <h2>Create a New Event!</h2>

      <TextField
        id="outlined-basic"
        label="Event Name"
        value={eventName}
        onChange={handleEventNameInput}
        variant="outlined"
        sx={{ width: 300 }}
      />

      <br />

      <TextField
        id="outlined-basic"
        label="Event Description"
        variant="outlined"
        value={eventDescription}
        onChange={handleEventpDescriptionInput}
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
        onChange={handleEventIssueInput}
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
        Create Event!
      </Button>
    </Container>
  );
}

export default EventsCreate;

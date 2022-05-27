//Imports
import { useState, useEffect, useNavigate } from "react";
import axios from "axios";

//Import Components
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import LoginIcon from "@mui/icons-material/Login";
import CardContent from "@mui/material/CardContent";

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
  const handleEventImageInput = (e) =>{setEventImage(e.target.value)
  };
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
    eventImage: eventImage,
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
      .post(`${process.env.REACT_APP_SERVER_URL}/events/create`, newEvent)
      .then();
  };

  return (
    <Container sx={{ m: 1 }}>
      <Card sx={{ width: "40%", ml: 60, mt: 10 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <h2>Create a new event</h2>
          <form encType="multipart/form-data">
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
        onChange={handleEventIssueInput}
        renderInput={(params) => <TextField {...params} />}
      /> */}

            <label htmlFor="contained-button-file">
              <Hide
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleEventImageInput}
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
              Create Event!
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default EventsCreate;

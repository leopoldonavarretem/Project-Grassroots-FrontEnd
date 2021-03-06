//Imports
import { useState, useEffect } from "react";
import axios from "axios";

//Component imports
import Container from "@mui/material/Container";
import EventsCard from "../../components/EventsPage/EventsCard";

function Events(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/events`).then((events) => {
      setEvents(events.data);
    });
  }, []);

  function showAllEvents() {
    return events.map((event) => {
      return <EventsCard data={event} key={event._id}/>;
    });
  }

  return (
    <Container>
      <h3>Explore Events</h3>
      {showAllEvents()}
    </Container>
  );
}

export default Events;

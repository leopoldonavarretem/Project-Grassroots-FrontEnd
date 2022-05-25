//Imports
import { useState, useEffect } from "react";
import axios from "axios";

//Component imports
import Container from "@mui/material/Container";
import EventsCard from "../../components/EventsPage/EventsCard";

function Events(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5005/api/events").then((events) => {
      setEvents(events.data);
    });
  }, []);

  function showAllEvents() {
    return events.map((event) => {
      return <EventsCard data={event} />;
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

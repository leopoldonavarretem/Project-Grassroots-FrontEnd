//Imports
import { useState, useEffect } from "react";
import axios from "axios";

//Component imports
import Container from "@mui/material/Container";
import EventsCard from "../../components/EventsPage/EventsCard";

function Events(props) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5005/api/events").then((groups) => {
      setGroups(groups.data);
    });
  }, []);

  function showAllEvents() {
    return groups.map((group) => {
      return <EventsCard data={group} />;
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

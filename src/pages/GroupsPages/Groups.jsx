//Imports
import { useState, useEffect } from "react";
import axios from "axios";

function Groups(props) {
  //UseEffects
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5005/api/groups").then((groups) => {
      setGroups(groups.data);
    });
  }, []);

  return (
    <div>
      <h3>Explore Popular Groups</h3>
      
    </div>
  );
}

export default Groups;

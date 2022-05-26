//Imports
import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import banner from "./banner-womens-march.jpg";

//Import Components
import GroupsCard from "../../components/GroupsPage/GroupsCard";
import Container from "@mui/material/Container";

function HomePage(props) {
  const [groups, setGroups] = useState();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/home`).then((groups) => {
      setGroups(groups);
    });
  }, []);

  function showAllGroups() {
    return groups.map((group) => {
      return <GroupsCard data={group} />;
    });
  }

  return (
    <div className="body">
      <div className="container">
        <img src={banner} alt="" className="h" />
        <div className="centered">
        <h1 >GrassRoots</h1>
        <h4>A platform to Organize around Social Change</h4>
        </div>

      </div>
      <div>
      <h3>What is GrassRoots?</h3>

      </div>
    </div>
  );
}

export default HomePage;

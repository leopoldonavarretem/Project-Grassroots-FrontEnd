//Imports
import * as PATHS from "../utils/paths";
import { Navigate } from "react-router-dom";

//Home pages
import HomePage from "../pages/HomePages/HomePage";
import Learn from "../pages/HomePages/Learn"

//Authentification pages
import Signup from "../pages/AuthentificationPages/Signup";
import Login from "../pages/AuthentificationPages/LogIn";

//Issue pages
import Issues from "../pages/IssuesPages/Issues";
import IssuesIndividual from "../pages/IssuesPages/IssuesIndividual";

//Event pages
import Events from "../pages/EventsPages/Events";
import EventsIndividual from "../pages/EventsPages/EventsIndividual";
import EventsCreate from "../pages/EventsPages/EventsCreate"
import EventsPost from "../pages/EventsPages/EventsPost"

//Group pages
import Groups from "../pages/GroupsPages/Groups"
import GroupsIndividual from "../pages/GroupsPages/GroupsIndividual.jsx"
import GroupsCreate from "../pages/GroupsPages/GroupsCreate"
import GroupsPost from "../pages/GroupsPages/GroupsPost"

//User pages
import UserPage from "../pages/UserPages/UserPage";

//Error pages
import ProtectedPage from "../pages/AuthentificationPages/ProtectedPage";

function routes (props){
  const { user } = props;

  return [
    //Home Paths
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },

    {
      path: PATHS.LEARN,
      element: <Learn {...props}/>
    },

    //Authentification Paths
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },

    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },

    //Issues Paths
    {
      path: PATHS.ISSUES,
      element: <Issues />,
    },

    {
      path: PATHS.ISSUESINDIVIDUAL,
      element: <IssuesIndividual />,
    },

    //Events Paths
    {
      path: PATHS.EVENTS,
      element: <Events />,
    },

    {
      path: PATHS.EVENTSINDIVIDUAL,
      element: <EventsIndividual />,
    },

    {
      path: PATHS.EVENTSCREATE,
      element: <EventsCreate/>
    },

    {
      path: PATHS.EVENTSPOST,
      element: <EventsPost/>
    },

    //Groups Paths
    {
      path: PATHS.GROUPS,
      element: <Groups />,
    },

    {
      path: PATHS.GROUPSINDIVIDUAL,
      element: <GroupsIndividual />,
    },

    {
      path: PATHS.GROUPSCREATE,
      element: <GroupsCreate/>
    },

    {
      path: PATHS.GROUPSPOST,
      element: <GroupsPost/>
    },

    //User Paths
    {
      path: PATHS.USER,
      element: <UserPage />,
    },
    
    //Error Paths
    {
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;

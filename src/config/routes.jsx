//IMPORT REACT-ROUTER-DOM
import { Navigate } from "react-router-dom";

//HOME PAGES
import HomePage from "../pages/HomePage";

//USER PAGES
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import UserPage from "../pages/UserPage";

//EVENT PAGES
import EventsIndividual from "../pages/EventsIndividual";
import Events from "../pages/Events";

//ISSUE PAGES
import Issues from "../pages/Issues";
import IssuesIndividual from "../pages/IssuesIndividual";

//ERROR PAGES
import ProtectedPage from "../pages/ProtectedPage";

//IMPORT PATHS
import * as PATHS from "../utils/paths";

function routes (props){
  const { user } = props;

  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },

    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },

    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },

    {
      path: PATHS.ISSUES,
      element: <Issues />,
    },

    {
      path: PATHS.ISSUESINDIVIDUAL,
      element: <IssuesIndividual />,
    },

    {
      path: PATHS.EVENTS,
      element: <Events />,
    },

    {
      path: PATHS.EVENTSINDIVIDUAL,
      element: <EventsIndividual />,
    },

    {
      path: PATHS.USER,
      element: <UserPage />,
    },

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

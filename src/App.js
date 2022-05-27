//ROUTES
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import { Redirect } from "react-router-dom";

//COMPONENTS
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import Container from "@mui/material/Container"

//LOG IN 
import { getLoggedIn, logout } from "./services/auth";
import * as USER_HELPERS from "./utils/userToken";

//USESTATES
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  //FUNCTIONS
  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }

    setIsLoading(true);

    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();

      setIsLoading(false);

    
      return (setUser(null));
      
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  //USE EFFECTS
  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);


  if (isLoading) {
    return <LoadingComponent />;
  }


  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} user={user} />
      
      <Routes>
        {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} user={user} />
        ))}
      </Routes>

    </div>
  );
}

export default App

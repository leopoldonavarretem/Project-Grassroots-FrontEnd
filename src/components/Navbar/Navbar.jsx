//IMPORT REACT AND PATHS
import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";

//IMPORT CSS
import "./Navbar.css";

//IMPORT COMPONENTS
import IssueMenu from "../IssueMenu/IssueMenu";

function Navbar(props) {
  return (
    <nav>
      <div>
        <Link to={PATHS.HOMEPAGE} className="nav__projectName">
          {CONSTS.CAPITALIZED_APP}
        </Link>
      </div>

      <div>
        <Link to= {PATHS.ISSUES}>
          Issues
        </Link>
      </div>

      <IssueMenu />
    </nav>
  );
}

// {
//   /* <button className="nav-logoutbtn" onClick={props.handleLogout}>
//           Logout
//         </button> */
// }

//  {props.user ? (
//           <>
//             <LinkMenu/>
//           </>
//         ) : (
//           <>
//             <Link to={PATHS.SIGNUPPAGE} className="authLink">
//               Signup
//             </Link>
//             <Link to={PATHS.LOGINPAGE} className="authLink">
//               Log In
//             </Link>
//           </>
//         )}

export default Navbar;

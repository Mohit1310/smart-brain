// Importing the React library
import React from "react";

// A functional component named Navigation
// The component takes two props, onRouteChange and isSignedIn
const Navigation = ({ onRouteChange, isSignedIn }) => {
  // If the user is signed in, render this block of code
  if (isSignedIn) {
    return (
      // A navigation element with some inline styles applied
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        {/* A paragraph element with an onClick event listener to handle sign out */}
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign out
        </p>
      </nav>
    );
  } else {
    // If the user is not signed in, render this block of code
    return (
      // A navigation element with some inline styles applied
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        {/* A paragraph element with an onClick event listener to handle sign in */}
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign In
        </p>
        {/* A paragraph element with an onClick event listener to handle registration */}
        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim black underline pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

// Exporting the Navigation component as the default export of this module
export default Navigation;

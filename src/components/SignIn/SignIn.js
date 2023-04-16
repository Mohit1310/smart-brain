import React from "react";

// Create a class component called SignIn
class SignIn extends React.Component {
  // Initialize the component's state with an empty email and password
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      siginInPassword: "",
    };
  }
  // Handle changes to the email input field
  onEmailChange = (event) => {
    // Update the component's state with the new email value
    this.setState({ signInEmail: event.target.value });
  };
  // Handle changes to the password input field
  onPasswordChange = (event) => {
    // Update the component's state with the new password value
    this.setState({ siginInPassword: event.target.value });
  };
  // Handle form submission
  onSubmitSignIn = () => {
    // Make a POST request to the server to sign in the user
    fetch("https://facedetective-api.onrender.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      // Send the email and password as the request body
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.siginInPassword,
      }),
    })
      // Parse the response as JSON
      .then((response) => response.json())
      .then((user) => {
        // If the response includes a user ID, update the app's state to reflect the signed-in user
        if (user.id) {
          this.props.loadUser(user);
          // Change the app's route to the home page
          this.props.onRouteChange("home");
        }
      });
  };
  // Render the sign in form
  render() {
    // Destructure the 'onRouteChange' function from the component's props
    const { onRouteChange } = this.props;
    // Return a JSX element to render the sign in form
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("register")}
                className="f6 link dim black db pointer"
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
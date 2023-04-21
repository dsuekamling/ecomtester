import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";

class Header extends React.Component {

  // Define the initial state of the component
  state = {
    navOpen: false
  };

  // Event handler function for toggling the navigation menu
  handleNavigation = () => {

    // Check if the user is using a mobile device
    if (
      /Android|webOS|iPhone|iPad|iPod|iPad Pro|BlackBerry|MacOS|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {

      // Toggle the hamburger icon
      let hamburger = document.querySelector(".hamburger");
      let isNavOpen = this.state.navOpen;
      hamburger.classList.toggle("is-active");
      isNavOpen = !isNavOpen;

      // Update the state to reflect whether the navigation is open or not
      this.setState({
        navOpen: isNavOpen
      });

      // Open or close the navigation menu based on the current state
      if (isNavOpen) {
        document.querySelector(".Nav__list").style.width = "100vw";
      } else {
        document.querySelector(".Nav__list").style.width = "0";
      }
    }
  };

  render() {
    // Log the value of the navOpen state
    console.log(this.state.navOpen); 

    return (
      <div className="Header">
        {/* Render the Logo component */}
        <Logo />
        {/* Render the Nav component, passing the handleNavigation function as a prop */}
        <Nav handleNav={this.handleNavigation} />
      </div>
    );
  }
}

export default Header;

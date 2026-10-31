import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props); // Very important to mention
    /* Creation of State variable */
    this.state = {
      count: 2,
      count2: 5,
      userData: {},
    };
    //console.log("Child Constructor Called");
  }
  async componentDidMount() {
    //console.log("Child Component Did mount Called");
    const data = await fetch("https://api.github.com/users/purushottamrajput7");
    const jsonData = await data.json();
    // this.setState({
    //   userData: jsonData,
    // });
    //console.log(jsonData);

    this.timer = setInterval(() => {
      console.log("Interval Called");
    }, 1000);
  }
  componentDidUpdate() {
    //console.log("componentDitUpdate Called");
  }
  componentWillUnmount() {
    //console.log("componentWillUnmount Called");
    clearInterval(this.timer);
  }
  render() {
    //console.log("Child Render Called");
    //Destructuring the props
    const { name, login, location } = this.state.userData;
    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <h2>Count2: {this.state.count2}</h2>
        <button
          className="btn class-btn"
          onClick={() => {
            this.setState({
              count: this.state.count * this.state.count,
              count2: this.state.count2 * this.state.count2,
            });
          }}
        >
          Increment Count
        </button>
        <h3 className="user-name">Name : {name}</h3>
        <p className="contact-info">{login}</p>
        <address className="location">{location}</address>
      </div>
    );
  }
}
export default User;

import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props); // Very important to mention
    /* Creation of State variable */
    this.state = {
      count: 2,
      count2: 5,
    };
    console.log("Child Constructor Called");
  }
  componentDidMount() {
    console.log("Child Component Did mount Called");
  }
  render() {
    console.log("Child Render Called");
    //Destructuring the props
    const { userName } = this.props;
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
        <h3 className="user-name">Name : {userName}</h3>
        <p className="contact-info">@purushottam</p>
        <address className="location">Noida, Uttar Pardesh</address>
      </div>
    );
  }
}
export default User;

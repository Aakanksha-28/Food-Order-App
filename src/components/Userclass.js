import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   count: 5,
      //   count2: 3,
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
    // console.log("child constructor called");
  }
  async componentDidMount() {
    // console.log("child did mount called");
    const data = await fetch("https://api.github.com/users/Aakanksha-28");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  render() {
    // console.log("child rendered called");
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/*<h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 5,
            });
          }}
        >
          Increase count
        </button>
        <h1>Count2: {count2}</h1>
        */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: aakanksha@123.gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

/****
 *
 * -----MOUNTING-----
 *
 * constructor(dummy)
 * render(dummy)
 *  <HTML Dummy>
 * Component Did Mount
 *   <API Call>
 *   <this.setState> => State variable is updated
 *
 * -----UPDATE-----
 *  render(API data)
 *  <HTML(new api data)>
 *  componentDidUpdate
 */

// Userclass.js
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
class Userclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {
        name: "dummy",
        location: "bbsr",
      },
    };

    //console.log("constructor");
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/himanshuKr7");
    const data = await response.json();

    //console.log(data);

    this.setState({
      userinfo: data,
    });
  }

  componentDidUpdate() {
    //console.log("component is updated");
  }

  componentWillUnmount() {
    //console.log("will unmount");
  }

  render() {
    //console.log("render");
    const { name, location, avatar_url } = this.state.userinfo;
    return (
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
        <img
          src={avatar_url}
          alt={name}
          className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200"
        />
        <h1 className="text-2xl font-bold">{name}</h1>
        <h2 className="text-xl text-gray-700">Location: {location}</h2>
        <h3 className="text-lg text-gray-600">Age: 21</h3>
         <div className="flex gap-4  mt-2">
              <a href="https://www.linkedin.com/in/himanshu-kumar-06a42222b/" className="text-2xl"><FaLinkedin /></a>
            <a href="https://github.com/himanshuKr7" className="text-2xl"><FaGithub /></a>
         </div>
      </div>
    );
  }
}

export default Userclass;

// About.js
import React from "react";
import Userclass from "./Userclass";
import Usercontext from "../utils/Usercontext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="max-w-4xl mx-auto p-4 mt-8">
        {/* <div>
          loggedinuser
          <Usercontext.Consumer>
            {({ loggedinuser }) => (
              <h1 className="text-xl font-semibold">{loggedinuser}</h1>
            )}
          </Usercontext.Consumer>
        </div> */}
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        <h5 className="text-xl font-medium mb-2 text-center">
          This is the About Us page of Food Wallah
        </h5>
        <p className="text-center text-gray-600 mb-6">
          Developed by Himanshu, in the learning process of React JS and the concept in Real world Projects.
         Feel free to suggest changes and improvment or make a pull Request.
        </p>
        <Userclass />
      </div>
    );
  }
}

export default About;

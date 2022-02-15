import React from "react";

import Typewriter from "typewriter-effect";

const banner = () => {
  return (
    <section className="banner">
      <h4>Hello world, my name is</h4>
      <h1>Rupesh Gudmalwar</h1>
      <span>and i'm a</span>
      <h2>
        <Typewriter
          options={{
            strings: [
              "Web developer",
              "Frontend enthuasist",
              "Learner",
              "Programmer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
    </section>
  );
};

export default banner;

import React from "react";
import TypingEffect from "react-typing-effect";

let gif = require("../animation.gif");
console.log(gif);

// CustomTextRenderer component
const CustomTextRenderer = ({ text, index }) => {
  return (
    <h2 key={index}>
      {text.split("").map((char, i) => {
        return (
          <span
            key={i}
            style={{
              color: char === "," ? "#121212" : "#ffffff",
            }}
          >
            {char}
          </span>
        );
      })}
    </h2>
  );
};

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        backgroundImage: `url(${gif})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: " calc(100vh - 160px)",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ color: "#3778F6" }}>Greetings!</h4>
        <h4 style={{ color: "#3778F6" }}>Welcome to</h4>

        <div>
          <TypingEffect
            text={["PASGC - Predictive Analysis System"]}
            speed={100}
            eraseSpeed={100}
            typingDelay={0}
            eraseDelay={2000}
            displayTextRenderer={(text, i) => (
              <CustomTextRenderer text={text} index={i} />
            )}
            cursorRenderer={(cursor) => <h2>{cursor}</h2>}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

// Team.jsx
import React from "react";
import "./Team.css";
import TeamCard from "./TeamCard";
import NameCard from "./NameCard";
import Executives from "./Executives";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";
import Contact from "../ContactUs/Contact";
import teamRecord from "./members.json";

const Team = () => {
  return (
    <>
      <Navbar2 />
      <div className="teams-page">
        {/* <div id="team" className="teamHeading">
          <h1>Team Innovation cell</h1>
        </div> */}
        <div id="team" className="teamHeading">
          <h1>Overall coordinators</h1>
        </div>
        <div className="Teams">
          {teamRecord.teamData.OC.map((member, index) => (
            <TeamCard
              key={index}
              profileImg={member.picLink}
              name={member.name}
              instaLink={member.insta}
              linkedinLink={member.linkedin}
            />
          ))}
        </div>

        <div className="teamHeading">
          <h1>Core coordinators</h1>
        </div>

        <div className="Teams">
          {teamRecord.teamData.coreCoordinators.map((coordinator, index) => (
            <NameCard
              key={index}
              name={coordinator.name}
              domain={coordinator.domain}
              instaLink={coordinator.insta}
              linkedinLink={coordinator.linkedin}
            />
          ))}
        </div>

        <div className="teamHeading">
          <h1>Executives</h1>
        </div>

        <div className="Teams">
          {teamRecord.teamData.executives.map((executive, index) => (
            <Executives
              key={index}
              domain={Object.keys(executive)[0]}
              members={executive[Object.keys(executive)[0]]}
            />
          ))}
        </div>
      </div>
      <div id="contactusnav"></div>
      <Contact />
      <Footer />
    </>
  );
};

export default Team;

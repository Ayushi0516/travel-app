import React, { useEffect } from "react";
import "../styles/about.css";
import { TEXT } from "../utils/text";
import ceo from '../assets/images/ceo.jpg'
import cto from '../assets/images/cto.jpg'
import cmo from '../assets/images/cmo.jpg'
import coo from '../assets/images/coo.jpg'

const teamMembers = [
  {
    name: "Hermione Granger",
    role: "CTO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna a ex commodo, non lobortis justo facilisis.",
    image: cto,
  },
  {
    name: "Ginny Weasley",
    role: "CEO",
    bio: "Praesent mattis justo nec odio bibendum, quis vehicula risus tincidunt. Nullam auctor elit at libero ultrices.",
    image: ceo,
  },
  {
    name: "Harry Potter",
    role: "CMO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna a ex commodo, non lobortis justo facilisis.",
    image: cmo,
  },
  {
    name: "Ron Weasley ",
    role: "COO",
    bio: "Praesent mattis justo nec odio bibendum, quis vehicula risus tincidunt. Nullam auctor elit at libero ultrices.",
    image: coo,
  },
];

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="about-container">
      <section className="company-info">
        <h2>{TEXT.ABOUT}</h2>
        <p>
          {TEXT.ABOUT_DESCRIPTION_ONE}
        </p>
        <p>
          {TEXT.ABOUT_DESCRIPTION_TWO}
        </p>
      </section>

      <section className="team-members">
        <h2>{TEXT.OUR_TEAM}</h2>
        <div className="team-member-list">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

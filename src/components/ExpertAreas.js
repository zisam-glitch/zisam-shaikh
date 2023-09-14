import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import Counter from "./Counter";

const counts = [
  { name: "Projects Done", value: 35 },
  { name: "Startups ", value: 4 },
  { name: "Listeners", value: 527 },
  { name: "Own Projects", value: 12 },
];

const skills = [
  { name: "javascript", value: "90", icon: "img/svg/javascript.svg" },
  { name: "React", value: 90, icon: "img/svg/react.svg" },
  { name: "Angular", value: "85", icon: "img/svg/angular.svg" },
  { name: "Vue", value: "95", icon: "img/svg/vuetify.svg" },
  { name: "Illustrator", value: "90", icon: "img/svg/illustrator.svg" },
  { name: "Figma", value: "75", icon: "img/svg/figma.svg" },
];

const experiences = [
  {
    company: "Debugsny.",
    designation: "Founder and CEO",
    time: "Present",
  },
  {
    company: "Lnflux Innovations",
    designation: "Junior Developer",
    time: "2022 - 2023",
  },
  {
    company: "SMtech",
    designation: "Junior Developer",
    time: "2021 - 2022",
  },
  {
    company: "Nom Foram",
    designation: "Web Designer",
    time: "2020 - 2021",
  },
];

const educations = [
  {
    institution: "Meta ",
    certificate: "Front-End Developer Course",
    time: "Aug - 2020",
  },
  {
    institution: "IBM",
    certificate: "Full Stack Software Developer Course",
    time: "Jan - 2021 ",
  },
  {
    institution: "University of Michigan",
    certificate: "Web Design for Everybody",
    time: "Sep - 2022",
  },

];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>
                      My expert
                      <br />
                      areas
                    </span>
                  </h3>
                </div>
                <div className="text">
                  <p>
                    Proficient in HTML5, CSS3, and JavaScript for building
                    responsive and user-friendly web interfaces. Extensive
                    experience with modern front-end libraries and frameworks,
                    including React, Angular, and Vue.js. Strong knowledge of
                    cross-browser compatibility and accessibility standards,
                    ensuring a seamless user experience for all.
                  {/* </p>
                  <p> */}
                    Skilled in server-side scripting languages such as Node.js,
                    Python (Django), and Ruby (Ruby on Rails).
                  </p>
                </div>
                {/* <div className="orido_tm_boxed_button">
                  <a href="#">
                    My Resume{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div> */}
              </div>
              <div className="right">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Skills</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <span className="icon">
                                <span className="in">
                                  <img
                                    className="svg"
                                    src={skill.icon}
                                    alt=""
                                  />
                                </span>
                              </span>
                              <p className="name">
                                {skill.name} <span>({skill.value}%)</span>
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{experience.time}</span>
                                <span className="company">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      <div className="orido_tm_section">
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ExpertAreas;

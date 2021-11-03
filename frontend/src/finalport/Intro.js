import React, { Fragment, useContext } from "react";
import { PersonalContext } from "../components/context/PersonalContext";
import { ExperienceContext } from "../components/context/ExperienceContext";
import { EducationContext } from "../components/context/EducationContext";
import Spinner from "../layout/Spinner";

const Intro = () => {
  const { personnal, isLoading } = useContext(PersonalContext);
  console.log(personnal);
  const { experience } = useContext(ExperienceContext);
  const { education } = useContext(EducationContext);
  if (isLoading) return <Spinner />;
  return (
    <Fragment>
      <section class="home" id="home">
        <div class="max-width">
          <div class="home-content">
            <div class="text-1">Hello, my name is</div>
            <div class="text-2">{personnal.name}</div>
            <div class="text-3">
              And I'm a {experience.title}
              <span class="typing"></span>
            </div>
          </div>
        </div>
      </section>
      <section class="about" id="about">
        <div class="max-width">
          <h2 class="title">About me</h2>
          <div class="about-content">
            <div class="column left">
              <img src={`/uploads/${personnal.photo}`} alt="" />
            </div>
            <div class="column right">
              <div class="text">
                I'm {personnal.name} and I'm a {experience.title}
              </div>
              <p>{personnal.bio}</p>
              <p>
                I have been working as {experience.title} in{" "}
                {experience.company}.
              </p>
              <p>
                I am a graduate of {education.school} with {education.degree} as
                my Major
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;

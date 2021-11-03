import React, { Fragment, useContext } from "react";
import Spinner from "../layout/Spinner";
import { SkillContext } from "../components/context/SkillContext";

const Skills = () => {
  const { isLoading, skills } = useContext(SkillContext);
  if (isLoading) return <Spinner />;
  return (
    <Fragment>
      <section class="skills" id="skills">
        <div class="max-width">
          <h2 class="title">My skills</h2>
          <div class="skills-content">
            <div class="column left">
              <div class="text">My creative skills & experiences.</div>
            </div>
            <div class="column right">
              <ul>
                <li>Languages: {skills.language[0]}</li>
                <li>Frameworks: {skills.frameworks[0]}</li>
                <li>Tools: {skills.tools[0]}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Skills;

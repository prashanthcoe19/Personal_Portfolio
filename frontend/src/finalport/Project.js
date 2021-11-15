import React, { Fragment, useContext } from "react";
import { ProjectContext } from "../components/context/ProjectContext";
import Spinner from "../layout/Spinner";
const Project = () => {
  const { isLoading, project } = useContext(ProjectContext);
  console.log(project);
  if (isLoading) return <Spinner />;
  return (
    <Fragment>
      <section class="services" id="services">
        <div class="max-width">
          <h2 class="title">My Projects</h2>
          <div class="serv-content">
            {project &&
              project.map((proj) => {
                return (
                  <div class="card">
                    <div class="box">
                      <i class="fas fa-code"></i>
                      <div class="text">{proj.title}</div>
                      <p>{proj.description}</p>
                      <p>Tools Used: {proj.tools[0]}</p>
                      
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Project;

import React, { createContext, useState, useEffect } from "react";
import api from "../../utils/api";
import Spinner from "../../layout/Spinner";
import setAuthToken from "../../utils/setAuth";
export const ProjectContext = createContext();

const ProjectState = (props) => {
  const [project, setProject] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const getProject = async () => {
    try {
      const res = await api.get("/project/get");
      console.log(res.data);
      setProject(res.data);
      setisLoading(false);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    getProject();
  }, []);

  return (
    <div>
      {/* {isLoading ? (
        <Spinner />
      ) : ( */}
      <ProjectContext.Provider
        value={{
          project,
          setProject,
          isLoading,
          setisLoading,

          ...props,
        }}
      >
        {props.children}
      </ProjectContext.Provider>
      {/* )} */}
    </div>
  );
};
export default ProjectState;

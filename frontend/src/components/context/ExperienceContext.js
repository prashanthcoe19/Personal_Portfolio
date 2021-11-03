import React, { createContext, useState, useEffect } from "react";
import api from "../../utils/api";
import Spinner from "../../layout/Spinner";
import setAuthToken from "../../utils/setAuth";
export const ExperienceContext = createContext();

const ExperienceState = (props) => {
  const [experience, setExperience] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const getExperience = async () => {
    try {
      const res = await api.get("/experience/get");
      setExperience(res.data[0]);
      setisLoading(false);
      console.log(res.data);
      //   console.log(personnal);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    getExperience();
  }, []);

  return (
    <div>
      {/* {isLoading ? (
        <Spinner />
      ) : ( */}
      <ExperienceContext.Provider
        value={{
          experience,
          setExperience,
          isLoading,
          setisLoading,
          ...props,
        }}
      >
        {props.children}
      </ExperienceContext.Provider>
      {/* )} */}
    </div>
  );
};
export default ExperienceState;

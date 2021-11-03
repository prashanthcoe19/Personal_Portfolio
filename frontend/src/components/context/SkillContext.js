import React, { createContext, useState, useEffect } from "react";
import api from "../../utils/api";
import Spinner from "../../layout/Spinner";
import setAuthToken from "../../utils/setAuth";

export const SkillContext = createContext();

const SkillState = (props) => {
  const [skills, setSkills] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const getSkill = async () => {
    try {
      const res = await api.get("/skill/get");
      setSkills(res.data[0]);
      setisLoading(false);
      //   console.log(personnal);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // console.log(localStorage.getItem("token"));
    getSkill();
  }, []);

  return (
    <div>
      {/* {isLoading ? (
        <Spinner />
      ) : ( */}
      <SkillContext.Provider
        value={{
          skills,
          setSkills,
          isLoading,
          setisLoading,
          ...props,
        }}
      >
        {props.children}
      </SkillContext.Provider>
      {/* )} */}
    </div>
  );
};
export default SkillState;

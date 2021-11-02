import React, { createContext, useState, useEffect } from "react";
import api from "../../utils/api";
import Spinner from "../../layout/Spinner";
export const SkillContext = createContext();

const SkillState = (props) => {
  const [skills, setSkills] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const getSkill = async () => {
    try {
      const res = await api.get("/skill/get");
      setSkills(res.data);
      setisLoading(false);
      //   console.log(personnal);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
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

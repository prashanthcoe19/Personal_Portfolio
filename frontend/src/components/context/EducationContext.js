import React, { createContext, useState, useEffect } from "react";
import api from "../../utils/api";
import Spinner from "../../layout/Spinner";

export const EducationContext = createContext();

const EducationState = (props) => {
  const [education, setEducation] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const getEducation = async () => {
    try {
      const res = await api.get("/education/get");
      setEducation(res.data[0]);
      setisLoading(false);
      //   console.log(personnal);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    // console.log(localStorage.getItem("token"));
    getEducation();
  }, []);

  return (
    <div>
      {/* {isLoading ? (
        <Spinner />
      ) : ( */}
      <EducationContext.Provider
        value={{
          education,
          setEducation,
          isLoading,
          setisLoading,
          ...props,
        }}
      >
        {props.children}
      </EducationContext.Provider>
      {/* )} */}
    </div>
  );
};
export default EducationState;

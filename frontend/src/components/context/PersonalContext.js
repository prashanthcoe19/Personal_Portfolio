import React, { createContext, useState, useEffect } from "react";
import api from "../../utils/api";
import Spinner from "../../layout/Spinner";
export const PersonalContext = createContext();

const PersonalState = (props) => {
  const [personnal, setPersonnal] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const getPersonal = async () => {
    try {
      const res = await api.get("/personal/get");
      setPersonnal(res.data[0]);
      setisLoading(false);
      //   console.log(personnal);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    // console.log(localStorage.getItem("token"));
    getPersonal();
  }, []);

  return (
    <div>
      {/* {isLoading ? (
        <Spinner />
      ) : ( */}
      <PersonalContext.Provider
        value={{
          personnal,
          setPersonnal,
          isLoading,
          setisLoading,
          ...props,
        }}
      >
        {props.children}
      </PersonalContext.Provider>
      {/* )} */}
    </div>
  );
};
export default PersonalState;

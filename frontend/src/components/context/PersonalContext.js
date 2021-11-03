import React, { createContext, useState, useEffect } from "react";
import api from "../../utils/api";
import Spinner from "../../layout/Spinner";
import setAuthToken from "../../utils/setAuth";
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
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
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
          getPersonal,
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

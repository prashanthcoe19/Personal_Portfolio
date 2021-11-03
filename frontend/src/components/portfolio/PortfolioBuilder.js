import React, { useContext } from "react";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import ProjectInfo from "./ProjectInfo";
import SkillInfo from "./SkillInfo";
import { AuthContext } from "../context/AuthContext";
import { PersonalContext } from "../context/PersonalContext";
import Spinner from "../../layout/Spinner";
import { Redirect } from "react-router-dom";
const PortfolioBuilder = (props) => {
  const { isAuthenticated, isLoaded } = useContext(AuthContext);
  // const { isLoading } = useContext(PersonalContext);
  if (isAuthenticated === false) {
    return <Redirect to="/login" />;
  }
  if (!isLoaded) return <Spinner />;
  return (
    <React.Fragment>
      <PersonalInfo />
      <EducationInfo />
      <ExperienceInfo />
      <ProjectInfo />
      <SkillInfo />
    </React.Fragment>
  );
};

export default PortfolioBuilder;

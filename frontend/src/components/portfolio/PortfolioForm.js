import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fragment, useContext } from "react";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import ProjectInfo from "./ProjectInfo";
import SkillInfo from "./SkillInfo";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import Spinner from "../../layout/Spinner";
import { PersonalContext } from "../context/PersonalContext";
const steps = [
  "Personal Information",
  "Educational Information",
  "Experience Information",
  "Project Information",
  "Skills",
];

export default function PortfolioForm(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const { isAuthenticated, isLoaded } = useContext(AuthContext);
  const { isLoading, personal } = useContext(PersonalContext);
  if (isAuthenticated === false) {
    return <Redirect to="/login" />;
  }
  if (!isLoaded || isLoading) return <Spinner />;
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Fragment>
      {!isLoaded ? (
        <h1>Loading ... </h1>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Box sx={{ width: "100%" }}>
                <h1 className="large text-secondary">Create Your Profile</h1>
                <p className="lead">
                  <i className="fas fa-user" /> <span />
                  Let's get some information to make your portfolio
                </p>
                <Stepper activeStep={activeStep}>
                  {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                      labelProps.optional = (
                        <Typography variant="caption">Optional</Typography>
                      );
                    }
                    if (isStepSkipped(index)) {
                      stepProps.completed = false;
                    }
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button onClick={handleReset}>Reset</Button>
                    </Box>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {activeStep === 0 ? (
                      <PersonalInfo />
                    ) : activeStep === 1 ? (
                      <EducationInfo />
                    ) : activeStep === 2 ? (
                      <ExperienceInfo />
                    ) : activeStep === 3 ? (
                      <ProjectInfo />
                    ) : activeStep === 4 ? (
                      <SkillInfo />
                    ) : undefined}
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </Box>
                  </React.Fragment>
                )}
              </Box>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

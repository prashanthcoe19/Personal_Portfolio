import React from "react";
import Landing from "./layout/Landing";
import "./App.css";
import Navbar from "./layout/Navbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Routes from "./components/routes/Routes";
import AuthState from "./components/context/AuthContext";
import PersonalState from "./components/context/PersonalContext";
import EducationState from "./components/context/EducationContext";
import ExperienceState from "./components/context/ExperienceContext";
import ProjectState from "./components/context/ProjectContext";
import SkillState from "./components/context/SkillContext";
function App() {
  return (
    <div>
      <AuthState>
        <PersonalState>
          <EducationState>
            <ExperienceState>
              <ProjectState>
                <SkillState>
                  <BrowserRouter>
                    <Navbar />
                    <Switch>
                      <Route exact path="/" component={Landing} />
                      <Route component={Routes} />
                    </Switch>
                  </BrowserRouter>
                </SkillState>
              </ProjectState>
            </ExperienceState>
          </EducationState>
        </PersonalState>
      </AuthState>
    </div>
  );
}

export default App;

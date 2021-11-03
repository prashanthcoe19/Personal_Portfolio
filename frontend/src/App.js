import React, { useEffect } from "react";
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
import setAuthToken from "./utils/setAuth";
import FinalPort from "./finalport/FinalPort";
import PrivateRoute from "./components/routes/Private";
import Footer from "./layout/Footer";
function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);
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
                      <PrivateRoute
                        exact
                        path="/portfolio"
                        component={FinalPort}
                      />
                      <Route component={Routes} />
                    </Switch>
                    <Footer />
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

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import HomePage from "./Pages/Home/HomePage";
import ProgramsPage from "./Pages/Programs/ProgramsPage";
import ProgramPage from "./components/ProgramPage/ProgramPage";
import AboutPage from "./Pages/About/AboutPage";
import ContactPage from "./Pages/Contact/ContactPage";
import BlogPage from "./Pages/Blog/BlogPage";
import LoginPage from "./Pages/Login/LoginPage";
import SignupPage from "./Pages/SignUp/SignupPage";
import NotfoundPage from "./Pages/NotfoundPage/NotfoundPage";
import DashBoardPage from "./Pages/DashBoard/DashBoardPage";
import Intern_info from "./Pages/intern_info/Intern_info";
import Footer from "./Footer/footer"
import ForgotPassword from "./Pages/Forgotpassword/ForgotPass";
import AddEducation from "./Pages/AddEducation/AddEducation";
import AddExperience from "./Pages/AddExperience/AddExperience";
import AddSkills from "./Add Skills/AddSkills"
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/programs" component={ProgramsPage} />
        <Route exact exact path="/programs/:progName" component={ProgramPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/intern_info" component={Intern_info} />
        <Route path="/blog" component={BlogPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/dashboard" component={DashBoardPage} />
        <Route exact path="/addeducation" component={AddEducation} />
        <Route exact path="/addexperience" component={AddExperience} />
        <Route exact path="/addskills" component={AddSkills} />
        {/* <Route component={NotfoundPage} /> */}
        <Route exact path="/forgotpassword" component={ForgotPassword} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

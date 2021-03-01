import Tasks from "./components/Tasks";
import About from "./components/About";
import TasksAssigned from "./components/TasksAssigned";
import Navigationbar from "./components/Navigationbar";
import Project from "./components/Project";
import Model from "./components/Model";
import Analytics from "./components/Analytics";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navigationbar fixed="Top" />
      <Route path="/Project" exact component={Project} />
      <Route path="/TasksAssigned" exact component={TasksAssigned} />
      <Route path="/Model" exact component={Model} />
      <Route path="/Analytics" exact component={Analytics} />
      <Route path="/" exact component={Tasks} />
      <Route path="/about" exact component={About} />
    </Router>
  );
};

export default App;

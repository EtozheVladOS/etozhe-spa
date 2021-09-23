import './App.scss';
import { Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import ContactItem from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/aboutMe" exact component={AboutMe} />
        <Route path="/contacts" exact component={ContactItem} />
      </Switch>
    </div>
  );
}

export default App;

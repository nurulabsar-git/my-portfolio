import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blogs from './Components/Blogs/Blogs';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Home/Footer/Footer';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume/Resume';

function App() {
  return (
    <div>
  <Router>
      <Header></Header>
        <Switch>
            <Route path="/resume">
            <Resume></Resume>
            </Route>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/blogs">
           <Blogs></Blogs>
            </Route>
            <Route path="/contactMe">
              <ContactMe></ContactMe>
            </Route>
            <Route path="/footer">
            <Footer></Footer>
            </Route>
            <Route exact path ="/">
            <Home></Home>
            </Route>

            <Route path="*">
            <NotFound></NotFound>
            </Route>
          </Switch>
  </Router>
    </div>
  );
}

export default App;

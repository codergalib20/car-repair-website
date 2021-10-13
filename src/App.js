import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';
import AboutService from './pages/Services/AboutService/AboutService';
import Services from './pages/Services/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/home">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/services">
              <Header></Header>
              <Services></Services>
          </Route>
          <Route path="/service/:aboutServicesId">
            <Header></Header>
            <AboutService></AboutService>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

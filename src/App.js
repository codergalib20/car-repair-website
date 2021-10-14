import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import About from './pages/About/About';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import AboutService from './pages/Services/AboutService/AboutService';
import Services from './pages/Services/Services/Services';

function App() {
  return (
    <>
      <AuthProvider>
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
            <Route path="/about">
              <Header></Header>
                <About></About>
            </Route>
            <Route path="/services">
                <Header></Header>
                <Services></Services>
            </Route>
            <Route path="/login">
              <Header></Header>
              <Login></Login>
            </Route>
            <PrivateRoute path="/service/:aboutServicesId">
              <Header></Header>
              <AboutService></AboutService>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;

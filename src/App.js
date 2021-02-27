import { Fragment } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';
import Header from './components/Header/Header';

function App() {
  return (
    <Fragment>
      <div className="wrapper">
        <Router>
          
          <div className="main-panel">
            <Header></Header>
            <div className="container-fluid">
              <Switch>
                <Route path='/dashboard' exact component={Dashboard} />
                <Route path='/about' exact component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;

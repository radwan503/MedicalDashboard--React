import { Fragment } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';
import Header from './components/Header/Header';
import ViewAppoinment from './pages/Appoinment/ViewAppoinment/ViewApppoinment';

function App() {
  return (
    <Fragment>
      <div className="wrapper">
        <Router>
          <aside className="side-panel">
            <Sidebar></Sidebar>
          </aside>
          <main className="main-panel">
            <Header></Header>
            <div className="container-fluid">
              <Switch>
                <Route path='/' exact component={Dashboard} />
                <Route path='/view-appoinment' exact component={ViewAppoinment}/>
              </Switch>
            </div>
          </main>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;

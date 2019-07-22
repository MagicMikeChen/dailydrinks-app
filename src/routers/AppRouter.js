import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import history from "../components/History";
import DrinkDashboardPage from '../components/DrinkDashboardPage';
import AddDrinkPage from '../components/AddDrinkPage'
import EditDrinkPage from '../components/EditDrinkPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
  <Router history={history}>
    <div>
    <Header/>
      <Switch>
        <Route path="/" component={DrinkDashboardPage} exact={true}/>
        <Route path="/create" component={AddDrinkPage} />
        <Route path="/edit/:id" component={EditDrinkPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

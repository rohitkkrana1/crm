import React from 'react';  
import { Switch,Route,withRouter } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {   
    Dashboard as DashboardView,
    Company as CompanyView,
    AddCompany as AddCompanyView,
    SignUp as SignUpView,
    SignIn as SignInView, 
    NotFound as NotFoundView,
    LeadsView as ShowLeadsView     

  } from './views';

  const Routes = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
      <>
      <Switch> 
        <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
       <RouteWithLayout
        component={CompanyView}
        exact
        layout={MainLayout}
        path="/company"
      />
       <RouteWithLayout
        component={ShowLeadsView}
        exact
        layout={MainLayout}
        path="/lead"
      />
       <RouteWithLayout
        component={AddCompanyView}
        exact
        layout={MainLayout}
        path="/addcompany"
      />
       <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/"
      />
     
        <RouteWithLayout
          component={SignUpView}
          exact
          layout={MinimalLayout}
          path="/sign-up"
        />
        <Route
          component={SignInView}
          exact
          path="/sign-in"
        />
        <RouteWithLayout
          component={NotFoundView}
          exact
          layout={MinimalLayout}
          path="*"          
        />
             
      </Switch>
     {/* (user && user.accessToken)?<Switch>           
        <Redirect
          exact
          from="/"
          to="/dashboard"
        />
        <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
        <RouteWithLayout
          component={SignUpView}
          exact
          layout={MinimalLayout}
          path="/sign-up"
        />
        <Route
          component={SignInView}
          exact
          path="/sign-in"
        />
        <RouteWithLayout
          component={NotFoundView}
          exact
          layout={MinimalLayout}
          path="/not-found"
        />
        <Redirect  to="/not-found" />
     
      </Switch>:<Switch>
      
        <Route
          component={SignInView}
          exact          
          path="/sign-in"
     ></Route><Redirect from="/" to="/sign-in" /></Switch> */ }
      </>
    );
  };
  
  export default withRouter(Routes);
  
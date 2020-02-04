import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route'; // routewraper

import SignIn from '~/pages/SingIn';
import SignUp from '~/pages/SignUp';

import DashBoard from '~/pages/DashBoard';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/DashBoard" component={DashBoard} isPrivate />
      <Route path="/Profile" component={Profile} isPrivate />
    </Switch>
  );
}

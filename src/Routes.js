import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './components/Profile';
import TodoList from './components/TodoList';


export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Register"/>
				  <Scene key="profile" component={Profile} title="profile"/>
				  <Scene key="todolist" component={TodoList} title="todolist"/>
			    </Stack>
			 </Router>
			)
	}
}
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { New } from './New';
import { Popular } from './Popular';

export const useRoutes = () => {
	return (
		<Switch>
			<Route path="/new" exact>
				<New />
			</Route>
			<Route path="/popular" exact>
				<Popular />
			</Route>
			<Redirect to="/new" />
		</Switch>
	)
};
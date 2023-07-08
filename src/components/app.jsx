import React, { Component } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import AddCreator from "../pages/addCreator";
import EditCreator from "../pages/editCreator";
import NotFound from "../pages/notFound";
import ShowCreators from "../pages/showCreators";
import ViewCreator from "../pages/viewCreator";

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<Routes>
						<Route path='/' element={<ViewCreator />} />
						<Route path='/view' element={<ViewCreator />} />
						<Route path='/add' element={<AddCreator />} />
						<Route path='/edit' element={<EditCreator />} />
						<Route path='/404' element={<NotFound />} />
						<Route path='*' element={<Navigate replace to='/404' />} />
					</Routes>
				</div>
			</React.Fragment>
		);
	}
}

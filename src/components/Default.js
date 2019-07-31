import React, { Component } from "react";

export default class Default extends Component {
	render() {
		console.log(this.props);
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-10 mx-auto text-center text-uppercase pt-5'>
						<h1 className='display-2 text-title'>404</h1>
						<h1 className='text-title mb-5'>error</h1>
						<h2>page not found</h2>
						<p className='lead'>
							the requested url{" "}
							<span className='text-danger'>
								{this.props.location.pathname}
							</span>{" "}
							was not found
						</p>
					</div>
				</div>
			</div>
		);
	}
}

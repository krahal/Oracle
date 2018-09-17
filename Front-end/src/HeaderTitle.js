import React, { Component } from 'react';
import './HeaderTitle.css';

class HeaderTitle extends Component {
	render() {
		return (
			<div className="HeaderTitle">
				<header className="App-header">
					<h1 className="App-title"><strong>Harness the power of machine learning to grow your business.</strong></h1>
					<br />
					<p className="App-intro">
						<strong><em>Oracle</em></strong> fights customer churn using advanced analytics!
          </p>
				</header>
			</div>
		)
	}
}

export default HeaderTitle;
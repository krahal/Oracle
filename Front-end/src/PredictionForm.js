import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';
import './PredictionForm.css';

class PredictionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			country: 'France',
			gender: '1',
			age: '',
			creditScore: '',
			tenure: '',
			balance: '',
			numOfProducts: '',
			hasCreditCard: '1',
			isActiveMember: '1',
			estimatedSalary: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = event => {
		event.preventDefault();

		axios.post('http://localhost:5000/predict', this.state)
			.then(res => {
				console.log(this.state);
				console.log(res);
				console.log(res.data);
			})
	}

	render() {
		return (
			<div className="PredictionForm">
				<form onSubmit={this.handleSubmit}>
				<div className="personal-info">
					<h3>Personal Information</h3>

						<FormGroup controlId="formControlsName">
							<ControlLabel>Name:</ControlLabel>
							<FormControl
								type="text"
								name="name"
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</FormGroup>

						<FormGroup controlId="formControlsCountry">
							<ControlLabel>Country</ControlLabel>
							<FormControl componentClass="select" placeholder="France">
								<option value="France">France</option>
								<option value="Germany">Germany</option>
								<option value="Spain">Spain</option>
							</FormControl>
						</FormGroup>

						<FormGroup controlId="formControlsGender">
							<ControlLabel>Gender</ControlLabel>
							<FormControl componentClass="select" placeholder="Male">
								<option value="1">Male</option>
								<option value="0">Female</option>
							</FormControl>
						</FormGroup>

						<FormGroup controlId="formControlsAge">
							<ControlLabel>Age:</ControlLabel>
							<FormControl
								type="text"
								name="age"
								value={this.state.age}
								onChange={this.handleChange}
							/>
						</FormGroup>
					</div>
					
					<div className="financial-info">
						<h3>Financial Information</h3>

						<FormGroup controlId="formControlsCreditScore">
							<ControlLabel>Credit Score:</ControlLabel>
							<FormControl
								type="text"
								name="creditScore"
								value={this.state.creditScore}
								onChange={this.handleChange}
							/>
						</FormGroup>

						<FormGroup controlId="formControlsTenure">
							<ControlLabel>Account Tenure:</ControlLabel>
							<FormControl
								type="text"
								name="tenure"
								value={this.state.tenure}
								onChange={this.handleChange}
							/>
						</FormGroup>

						<FormGroup controlId="formControlsBalance">
							<ControlLabel>Account Balance:</ControlLabel>
							<FormControl
								type="text"
								name="balance"
								value={this.state.balance}
								onChange={this.handleChange}
							/>
						</FormGroup>

						<FormGroup controlId="formControlsNumOfProducts">
							<ControlLabel>Number of Products:</ControlLabel>
							<FormControl
								type="text"
								name="numOfProducts"
								value={this.state.numOfProducts}
								onChange={this.handleChange}
							/>
						</FormGroup>

						<FormGroup controlId="formControlsCreditCard">
							<ControlLabel>Credit Card?:</ControlLabel>
							<FormControl componentClass="select" placeholder="Yes">
								<option value="1">Yes</option>
								<option value="0">No</option>
							</FormControl>
						</FormGroup>

						<FormGroup controlId="formControlsCreditCard">
							<ControlLabel>Active Member?:</ControlLabel>
							<FormControl componentClass="select" placeholder="Yes">
								<option value="1">Yes</option>
								<option value="0">No</option>
							</FormControl>
						</FormGroup>

						<FormGroup controlId="formControlsSalary">
							<ControlLabel>Estimated Salary:</ControlLabel>
							<FormControl
								type="text"
								name="estimatedSalary"
								value={this.state.estimatedSalary}
								onChange={this.handleChange}
							/>
						</FormGroup>
					</div>
					<Button type="submit" bsStyle="primary">Submit</Button>

				</form>
			</div>
		);
	}
}

export default PredictionForm;
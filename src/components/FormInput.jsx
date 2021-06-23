import React, { useState } from 'react';
import Button from './Button';
import styles from './FormInput.module.css';
import Modal from './Modal';

const FormInput = (props) => {
	const [ userName, setUserName ] = useState('');
	const [ userAge, setUserAge ] = useState('');
	const [ error, setError ] = useState('');

	const { newUser } = props;

	const submitHandler = (event) => {
		event.preventDefault();
		if (userName.trim().length === 0 || userAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).'
			});
			return;
		}
		if (+userAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age(>1)'
			});
			return;
		}

		newUser(userName, userAge);
		setUserName('');
		setUserAge('');
	};

	const userNameHandler = (event) => {
		console.log(event.target.value);
		setUserName(event.target.value);
	};

	const userAgeHandler = (event) => {
		console.log(event.target.value);
		setUserAge(event.target.value);
	};

	const confirmHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && <Modal onConfirm={confirmHandler} {...error} />}
			<form onSubmit={submitHandler}>
				<div className={styles['form-control']}>
					<div className={styles.userNameInput}>
						<label htmlFor="username">Username</label>
						<input id="username" type="text" onChange={userNameHandler} value={userName} />
					</div>
					<div className={styles.userAgeInput}>
						<label htmlFor="age">Age(Years)</label>
						<input id="age" type="number" onChange={userAgeHandler} value={userAge} />
					</div>
					<Button type="submit">Add User</Button>
				</div>
			</form>
		</div>
	);
};

export default FormInput;

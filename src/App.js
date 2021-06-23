import React, { useState } from 'react';
import FormInput from './components/FormInput';
import UserList from './components/UserList';
import './Bootstrap.css';
import styles from './App.module.css';

const App = () => {
	const [ users, setUsers ] = useState([]);
	const deleteItemHandler = (uId) => {
		setUsers((prevUsers) => {
			const newUsers = prevUsers.filter((user) => user.id !== uId);
			return newUsers;
		});
	};

	const getUser = (uName, uAge) => {
		setUsers((prevUsers) => {
			return [ ...prevUsers, { username: uName, age: uAge, id: Math.random().toString() } ];
		});
	};

	return (
		<div className={styles.App}>
			<FormInput newUser={getUser} />
			<UserList items={users} onDelete={deleteItemHandler} />
		</div>
	);
};

export default App;

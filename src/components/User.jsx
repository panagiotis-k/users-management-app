import React from 'react';
import styles from './User.module.css';

const User = (props) => {
	const { onDelete, id } = props;

	const onClickHandler = () => {
		onDelete(id);
	};

	const { username, age } = props;
	return (
		<div className={styles.user}>
			<li>
				{username.toUpperCase()} - <i>{age} years old</i>
				<span className={styles.icon}>
					<i onClick={onClickHandler} class="far fa-trash-alt" />
				</span>
			</li>
		</div>
	);
};

export default User;

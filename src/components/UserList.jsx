import React from 'react';
import styles from './UserList.module.css';
import User from './User';

const UserList = (props) => {
	const { items } = props;
	return (
		<div className={styles.userList}>
			{items.map((user) => {
				return <User {...user} key={user.id} {...props} />;
			})}
			{items.length === 0 && (
				<span className="text-muted">
					<i>Nothing to view...</i>
				</span>
			)}
		</div>
	);
};

export default UserList;

import React from 'react';
import styles from './Modal.module.css';
import Button from './Button';

const Modal = (props) => {
	return (
		<div className={styles.backdrop} onClick={props.onConfirm}>
			<div className={styles.modal}>
				<header className={styles.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={styles.content}>{props.message}</div>
				<footer className={styles.actions}>
					<Button {...props}>Ok</Button>
				</footer>
			</div>
		</div>
	);
};

export default Modal;

import './Button.scss';
export const Button = ({ children, onClick, className, disabled = false }) => (
	<button className={'button ' + className} onClick={onClick} disabled={disabled}>
		{children}
	</button>
);

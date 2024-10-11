import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTodos } from '../../../../utils/actions';

export const Search = ({ className }) => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(getTodos(value));
	};
	const onChange = ({ target }) => {
		setValue(target.value);
	};

	return (
		<form className={className('form-search')} onSubmit={onSubmit}>
			<input
				className={className('input-search')}
				type="text"
				value={value}
				onChange={onChange}
				placeholder="Search..."
			/>
		</form>
	);
};

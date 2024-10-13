import { useDispatch } from 'react-redux';
import { getTodos } from '../../../../utils/actions/todo-actions';

export const Sorting = ({ className }) => {
	const dispatch = useDispatch();
	const onChange = ({ target }) => {
		dispatch(getTodos('', target.checked));
	};
	return (
		<label className={className('sorting-label')}>
			Sorting
			<input id="sorting-input" className={className('sorting-checkbox')} type="checkbox" onChange={onChange} />
		</label>
	);
};

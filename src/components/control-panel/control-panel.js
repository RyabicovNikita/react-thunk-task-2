import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import { Search } from './components/Search/Search';
import { Sorting } from './components/Sorting/Sorting';
import './control-panel.scss';
import { createTodo } from '../../utils/actions';

export const ControlPanel = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todoReducer.todos);
	const className = useSelector((state) => state.optionsReducer.classNames.controlPanel);
	const onAddClick = () => {
		dispatch(createTodo);
	};
	return (
		<div className={className()}>
			<Search className={className} />
			<Sorting className={className} />
			<Button
				className={className('add-button')}
				onClick={onAddClick}
				disabled={todos.some((todo) => todo.isEdit === true)}
			>
				Add todo
			</Button>
		</div>
	);
};

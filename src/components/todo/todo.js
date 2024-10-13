import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from '../../utils/actions/todo-actions';
import { Button } from '../Button/Button';
import './todo.scss';
import { useState } from 'react';

export const Todo = ({ title, completed, isEdit, id }) => {
	const className = useSelector((state) => state.optionsReducer.classNames.todo);
	const dispatch = useDispatch();
	const onSaveClick = () => {
		dispatch(updateTodo(id, { title: currentTitle }));
	};
	const onCompletedClick = ({ target }) => {
		dispatch(updateTodo(id, { completed: target.checked }));
	};
	const onTodoClick = () => {
		dispatch(updateTodo(id, { isEdit: !isEdit }));
	};
	const onRemoveClick = () => {
		dispatch(deleteTodo(id));
	};
	const [currentTitle, setNewTitle] = useState(title);
	return (
		<div className={className('container', isEdit ? 'isEditing' : '')}>
			<input
				className={className('completed-checkbox')}
				type="checkbox"
				checked={completed}
				onChange={onCompletedClick}
			/>
			<div className={className('body')}>
				{isEdit ? (
					<input
						className={className('title')}
						type="text"
						value={currentTitle}
						onChange={({ target }) => setNewTitle(target.value)}
					/>
				) : (
					<a className={className('todo-body')} onClick={onTodoClick}>
						{title}
					</a>
				)}
			</div>
			{isEdit ? (
				<Button className={className('save-button')} onClick={onSaveClick}>
					Edit
				</Button>
			) : (
				<Button className={className('edit-button')} onClick={onRemoveClick}>
					Remove
				</Button>
			)}
		</div>
	);
};

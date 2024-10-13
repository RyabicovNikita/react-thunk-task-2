import { fetchServer } from '../../api';
import { INITIAL_TODO_DATA, TODO_ACTIONS } from '../../constants';

export const createTodo = (dispatch) =>
	fetchServer('POST', INITIAL_TODO_DATA).then((newTotosList) =>
		dispatch({ type: TODO_ACTIONS.ADD_TODO, payload: newTotosList }),
	);

export const getTodos =
	(userSearch = '', isSorting = false) =>
	(dispatch) =>
		fetchServer('GET', {
			userSearch,
			isSorting,
		}).then((todos) => dispatch({ type: TODO_ACTIONS.GET_ALL_TODOS, payload: todos }));

export const updateTodo = (id, newData) => (dispatch) =>
	fetchServer('PATCH', { id, isEdit: false, ...newData }).then((updatedTodo) =>
		dispatch({ type: TODO_ACTIONS.UPDATE_TODO, payload: updatedTodo }),
	);
export const deleteTodo = (todoId) => (dispatch) =>
	fetchServer('DELETE', { id: todoId }).then(() => dispatch({ type: TODO_ACTIONS.DELETE_TODO, payload: todoId }));

import { TODO_ACTIONS } from '../../constants';

export const initalTodoState = {
	todos: [],
};
export const todoReducer = (state = initalTodoState, { type, payload }) => {
	switch (type) {
		case TODO_ACTIONS.GET_ALL_TODOS:
			return { ...state, todos: payload.map((todo) => ({ ...todo, isEdit: false })) };
		case TODO_ACTIONS.GET_TODO:
			break;
		case TODO_ACTIONS.ADD_TODO:
			return { ...state, todos: [...state.todos, payload] };
		case TODO_ACTIONS.UPDATE_TODO:
			const oldTodoIndex = state.todos.findIndex((todo) => todo.id === payload.id);
			state.todos[oldTodoIndex] = { ...state.todos[oldTodoIndex], ...payload };
			return {
				...state,
				todos: [...state.todos],
			};
		case TODO_ACTIONS.DELETE_TODO:
			return {
				...state,
				todos: [...state.todos.filter((todo) => todo.id !== payload)],
			};
		default:
			return state;
	}
};

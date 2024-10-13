import { useState } from 'react';
import './App.scss';
import { useEffect } from 'react';
import { ControlPanel, Todo } from './components';
import { withNaming } from '@bem-react/classname';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from './utils/actions/todo-actions';
import { Loading } from './components/Loading/Loading';
import { OPTION_ACTIONS } from './constants';

const App = () => {
	// const [isLoading, setIsLoading] = useState(false);
	const settingClassNaming = withNaming({ e: '__' });
	const todoClassName = settingClassNaming('todo');
	const controlPanelClassName = settingClassNaming('control-panel');
	const loadingClassName = settingClassNaming('loading');
	const todos = useSelector((state) => state.todoReducer.todos);
	const isLoading = useSelector((state) => state.optionsReducer.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({
			type: 'UPDATE_ROOT_CLASSNAME',
			payload: { todo: todoClassName, controlPanel: controlPanelClassName, loading: loadingClassName },
		});
	}, []);

	useEffect(() => {
		dispatch(getTodos()).finally(() => dispatch({ type: OPTION_ACTIONS.LOADING_FINISH }));
	}, []);

	return (
		<div className="app">
			{isLoading ? (
				<Loading />
			) : (
				<>
					<ControlPanel />
					<div className={todoClassName()}>
						{todos.map(({ id, title, completed, isEdit }) => (
							<Todo key={id} id={id} title={title} completed={completed} isEdit={isEdit} />
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default App;

import { OPTION_ACTIONS } from '../../constants';

const initialOptionsState = {
	isLoading: false,
	classNames: {
		todo: () => '',
		controlPanel: () => '',
	},
};
export const optionsReducer = (state = initialOptionsState, { type, payload }) => {
	switch (type) {
		case OPTION_ACTIONS.SET_LOADING:
			return { ...state, isLoading: !state.isLoading };
		case OPTION_ACTIONS.UPDATE_ROOT_CLASSNAME:
			return { ...state, classNames: payload };
		default:
			return state;
	}
};

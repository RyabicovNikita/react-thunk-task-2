import { OPTION_ACTIONS } from '../../constants';

const initialOptionsState = {
	isLoading: true,
	classNames: {
		todo: () => '',
		controlPanel: () => '',
	},
	userSearch: '',
};
export const optionsReducer = (state = initialOptionsState, { type, payload }) => {
	switch (type) {
		case OPTION_ACTIONS.LOADING_START:
			return { ...state, isLoading: true };
		case OPTION_ACTIONS.LOADING_FINISH:
			return { ...state, isLoading: false };
		case OPTION_ACTIONS.UPDATE_ROOT_CLASSNAME:
			return { ...state, classNames: payload };
		case OPTION_ACTIONS.SET_USER_SEARCH:
			return { ...state, userSearch: payload };
		default:
			return state;
	}
};

import { useSelector } from 'react-redux';

export const Loading = () => {
	const className = useSelector((state) => state.optionsReducer.classNames.loading);
	return <div className={typeof className === 'function' ? className() : ''}>Loading...</div>;
};

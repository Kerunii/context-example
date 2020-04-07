export const initialState = {
	user: undefined,
	isLoading: true,
	childToParent: 'child'
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'USER_RESPONSE':
			return {
				...state,
				user: action.payload,
				isLoading: false
			};
		case 'LOADING':
			return {
				...state,
				isLoading: action.payload
			};
		case 'MODIFY_PARENT':
			return {
				...state,
				childToParent: action.payload
			};
		default:
			return state;
	}
};
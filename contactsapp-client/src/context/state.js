import React, {createContext, useReducer} from 'react';
export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) =>(
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// export const useStateValue = () => useContext(StateContext); --> Advanced mode


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
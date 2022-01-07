export const counterReducer = (state, action) => {
	switch (action.type) {
		case 'counter/increment':
			console.log('REDUCERRRR', state.count, action.payload)
			return {count: state.count + action.payload};
		default:
			return state;
	}
}

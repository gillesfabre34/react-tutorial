export const counterReducer = (count = 0, action) => {
	switch (action.type) {
		case 'counter/increment':
			return count + action.payload;
		default:
			return count;
	}
}

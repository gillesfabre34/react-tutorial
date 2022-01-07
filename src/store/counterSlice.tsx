export const counterReducer = (count = 0, action) => {
	switch (action.type) {
		case 'counter/increment':
			return count + 1;
		default:
			return count;
	}
}

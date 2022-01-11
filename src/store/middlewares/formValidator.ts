export const formValidatorMiddleware = ({dispatch}) => {
	return function (next) {
		return function (action) {
			console.log('MDLWWWW', action)
			next(action);
		}
	}
}

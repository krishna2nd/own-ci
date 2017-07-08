export function getProjectMenu(builds) {
	return {
		type : 'GET_BUILDS',
		builds
	};
}
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		projectName: params.projectName
	};
}

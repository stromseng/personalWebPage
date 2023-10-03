/** @type {import('./$types').PageLoad} */

import client from '$lib/sanityClient';

export async function load({ params }) {
	const data = await client.fetch(`*[_type == "project"]`);
	if (data) {
		console.log('Projects found');
		console.log(data);
		return {
			projects: data
		};
	}
	console.log('No projects found');
	return {
		status: 500,
		body: new Error('Internal Server Error in Sanity load function. No projects found')
	};
}

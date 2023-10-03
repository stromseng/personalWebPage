/** @type {import('./$types').PageLoad} */

import client from '$lib/sanityClient';

export async function load({ params }) {
	console.log(`Trying to find project ${params.projectName}`);
	const data = await client.fetch(`*[slug.current == "${params.projectName}"]`);
	if (data) {
		console.log('Project found');
		console.log(data);
		return {
			project: data
		};
	}
	console.log('Project not found');
	return {
		status: 500,
		body: new Error('Internal Server Error in Sanity load function. Project not found')
	};
}
